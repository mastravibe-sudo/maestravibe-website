export default function OrdersSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We discuss your project requirements, goals, budget, and timeline to understand your vision.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Our architects prepare concepts, layouts, and detailed architectural designs tailored to your needs.",
    },
    {
      number: "03",
      title: "CAD Documentation",
      description:
        "We create accurate construction drawings, working drawings, elevations, sections, and detailed documentation.",
    },
    {
      number: "04",
      title: "Visualization",
      description:
        "Photorealistic 3D renderings and visual presentations help you see the final project before construction.",
    },
    {
      number: "05",
      title: "Delivery & Support",
      description:
        "Final CAD files, PDFs, revisions, and continuous support are provided until project completion.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Workflow
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            How Maestra Arch Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We follow a professional architectural workflow from concept to
            construction documentation, ensuring every project is accurate,
            buildable, and delivered on time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl font-bold text-blue-600">
                {step.number}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}