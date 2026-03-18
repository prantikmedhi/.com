import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Minimalist Loft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Serene Workspace",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Urban Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Modern Dining",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Boutique Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Scandinavian Kitchen",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-accent py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">Selected <span className="text-secondary font-medium">Works.</span></h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            A curated selection of our recent projects, showcasing our commitment to minimal, elegant, and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm cursor-pointer block h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-light">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
