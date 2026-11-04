"use client";

import { useState } from "react";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function AVQuotationForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/av-quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unable to send enquiry");
      setStatus("sent");
      setFormData(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "av-form-input";

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <input className={inputClass} name="firstName" placeholder="Enter Your First Name" value={formData.firstName} onChange={handleChange} autoComplete="given-name" required />
        <input className={inputClass} name="lastName" placeholder="Enter Your Last Name" value={formData.lastName} onChange={handleChange} autoComplete="family-name" required />
      </div>
      <div className="form-row">
        <input className={inputClass} type="email" name="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} autoComplete="email" required />
        <input className={inputClass} type="tel" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
      </div>
      <div className="form-row">
        <input className={inputClass} name="company" placeholder="Enter Your Company Name" value={formData.company} onChange={handleChange} autoComplete="organization" />
        <textarea className={`${inputClass} av-form-textarea`} name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows={1} />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-submit" disabled={status === "sending"}>
          {status === "sending" ? "SENDING…" : "SUBMIT QUERY"}
        </button>
        <a className="btn-whatsapp" href="https://wa.me/923111555053?text=I%20am%20interested%20in%20audio%20visual%20solutions" target="_blank" rel="noreferrer">
          <span className="whatsapp-icon">◉</span> WHATSAPP
        </a>
      </div>
      {status === "sent" && <p className="av-form-feedback" role="status">Thanks — your AV enquiry has been sent to our team.</p>}
      {status === "error" && <p className="av-form-feedback av-form-error" role="alert">We couldn&apos;t send your enquiry. Please try again or contact our team directly.</p>}
    </form>
  );
}
