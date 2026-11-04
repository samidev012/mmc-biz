import nodemailer from "nodemailer";

const requiredFields = ["firstName", "lastName", "email", "phone"];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const form = Object.fromEntries(
    ["firstName", "lastName", "email", "phone", "company", "message"].map((field) => [
      field,
      String(data?.[field] ?? "").trim().slice(0, field === "message" ? 4000 : 250),
    ]),
  );

  if (requiredFields.some((field) => !form[field])) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { AV_SMTP_HOST, AV_SMTP_PORT, AV_SMTP_USER, AV_SMTP_PASSWORD, AV_SMTP_FROM } = process.env;
  const recipients = (process.env.AV_QUOTE_TO || "info@mmc.biz.pk,wajeeh@mmc.biz.pk,abid@mmc.biz.pk")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!AV_SMTP_HOST || !AV_SMTP_PORT || !AV_SMTP_USER || !AV_SMTP_PASSWORD || !recipients.length) {
    console.error("AV quotation mail is not configured: required AV_SMTP_* environment variables are missing.");
    return Response.json({ error: "Email service is not configured yet." }, { status: 503 });
  }

  const fields = [
    ["Name", `${form.firstName} ${form.lastName}`],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Company", form.company || "Not provided"],
    ["Message", form.message || "Not provided"],
  ];
  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<h2>New Audio Visual Quotation Request</h2><table>${fields
    .map(([label, value]) => `<tr><th align="left" style="padding:6px 12px 6px 0">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  try {
    const transporter = nodemailer.createTransport({
      host: AV_SMTP_HOST,
      port: Number(AV_SMTP_PORT),
      secure: process.env.AV_SMTP_SECURE !== "false",
      auth: { user: AV_SMTP_USER, pass: AV_SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: AV_SMTP_FROM || AV_SMTP_USER,
      to: recipients,
      replyTo: form.email,
      subject: `AV Quotation Request — ${form.firstName} ${form.lastName}`,
      text,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("AV quotation email failed:", error?.message || "Unknown SMTP error");
    return Response.json({ error: "Unable to send your enquiry right now." }, { status: 502 });
  }
}
