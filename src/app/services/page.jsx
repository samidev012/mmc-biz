export default async function ServicePage({ params }) {
  const { slug } = await params;

  return (
    <section className="border-b border-line px-6 py-24 text-center">
      <h1 className="text-4xl font-bold uppercase text-paper md:text-5xl">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-steel">
        More details about this service coming soon.
      </p>
    </section>
  );
}