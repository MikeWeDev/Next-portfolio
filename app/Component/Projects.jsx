import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce',
    desc: `A full-featured React + Tailwind e-commerce site with product catalog, cart, and checkout.`,
    img: '/coloshop-free-bootstrap-ecommerce-website-templates.jpg',
    liveUrl: 'https://mike-ecommerce-web.netlify.app/',
    tech: ['React', 'JS', 'Tailwind', 'CSS'],
  },
  {
    title: 'Real Estate',
    desc: `A modern real-estate showcase built with React, Tailwind & vanilla JS for dynamic listings.`,
    img: '/royalestate-free-real-estate-website-templates.jpg',
    liveUrl: 'https://mike-realstate-app.netlify.app/',
    tech: ['React', 'JS', 'Tailwind', 'CSS'],
  },
  // ...add more projects here
];

export default function Projects() {
  return (
    <section id="project" className="bg-[#172A3A] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white uppercase text-sm tracking-wider mb-2 text-center">
          Latest Projects
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My <span className="text-yellow-400">Best</span> Projects
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-800"
            >
              {/* Project image */}
              <div className="relative w-full h-60">
                <Image
                  src={p.img}
                  alt={p.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity"
                >
                  View Live Demo
                </a>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
                >
                  🚀 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
