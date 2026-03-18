export default function Services() {
  const services = [
    {
      title: "Interior Design",
      description: "Full-service interior design from concept to completion, tailored to your lifestyle and personal aesthetic.",
      icon: "01",
    },
    {
      title: "Space Planning",
      description: "Optimizing flow and functionality of your space, ensuring every square foot serves a purpose beautifully.",
      icon: "02",
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed specifically for your space, crafted with quality materials and attention to detail.",
      icon: "03",
    },
    {
      title: "Art Curation",
      description: "Selecting and sourcing original artwork and statement pieces to perfectly complement your newly designed space.",
      icon: "04",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
              Our <span className="text-secondary font-medium">Services.</span>
            </h2>
            <p className="text-gray-600 font-light text-lg">
              We offer a comprehensive approach to interior design, bringing a meticulous eye for detail to every phase of your project.
            </p>
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-block border-b border-gray-900 text-gray-900 pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
              >
                Inquire Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-secondary text-2xl font-light block mb-6">{service.icon}</span>
                <h3 className="text-2xl font-light text-gray-900">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
