import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1542314831-c6a4d14eff4e?q=80&w=2000&auto=format&fit=crop"
            alt="Interior designer at work"
            fill
            className="object-cover rounded-sm shadow-xl"
          />
          <div className="absolute top-6 -right-6 w-48 h-48 bg-background -z-10 rounded-sm"></div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Meet the <span className="text-secondary font-medium">Designer.</span>
          </h2>
          <div className="space-y-6 text-gray-600 font-light text-lg">
            <p>
              I believe that interior design is about more than just aesthetics; it&apos;s about creating spaces that intuitively support and enhance your way of living. My approach is rooted in simplicity, balance, and intentionality.
            </p>
            <p>
              With over a decade of experience in residential and boutique commercial design, I focus on crafting environments that feel effortlessly elegant yet deeply personal. I draw inspiration from natural materials, soft light, and architectural purity.
            </p>
            <p>
              Whether it&apos;s a complete home renovation or styling a single room, my goal is to curate a space that feels uniquely yours—a sanctuary where life unfolds beautifully.
            </p>
          </div>

          <div className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-gray-400"></div>
              <span className="text-gray-900 font-medium tracking-widest uppercase text-sm">Jane Doe</span>
            </div>
            <p className="text-gray-500 text-sm mt-1 ml-16">Founder & Principal Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
