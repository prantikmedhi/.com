import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight">
            Interior
            <br />
            <span className="text-secondary font-medium">Design.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md font-light">
            Crafting minimal, functional, and beautiful spaces that elevate your everyday living. Let&apos;s create your dream home together.
          </p>
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Modern minimal living room interior"
            fill
            className="object-cover rounded-sm shadow-xl"
            priority
          />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent -z-10 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
}
