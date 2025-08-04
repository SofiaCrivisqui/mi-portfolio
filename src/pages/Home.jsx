import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Base Cero",
    description: "Servicios digitales para emprendedores: landing pages, asesoramiento, análisis NPS.",
    image: "/img/basecero.jpg",
    link: "https://baseceroup.com",
    tags: ["UX/UI", "Responsive", "Tailwind"]
  },
  {
    name: "Palabra y Abismo",
    description: "Blog temático de psicoanálisis y filosofía con diseño simbólico e interactivo.",
    image: "/img/palabrayabismo.jpg",
    link: "https://sofiacrivisqui.github.io/palabrayabisimo/",
    tags: ["Psicoanálisis", "UI personalizada", "Filosofía"]
  },
  {
    name: "Mhum",
    description: "E-commerce de lencería moderna. Desarrollo con filtros, zoom y pasarela de pago.",
    image: "/img/mhum.jpg",
    link: "https://mhum.com",
    tags: ["E-commerce", "React", "UX"]
  },
  {
    name: "Atria-Estudio",
    description: "Landing visual para estudio de arquitectura. Mockups realistas y enfoque premium.",
    image: "/img/atriaestudio.jpg",
    link: "https://sofiacrivisqui.github.io/atriaestudio/",
    tags: ["Minimalismo", "Portafolio visual", "Diseño arquitectónico"]
  }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* HERO CON VIDEO DE FONDO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/fondo.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Capa oscura encima del video */}
       {/* Capa oscura encima del video */}
<div className="absolute inset-0 bg-black/60 z-10" />


        {/* Contenido encima del video */}
        <div className="relative z-20 text-white">
          <motion.h2
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UX/UI con alma digital
          </motion.h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Soy desarrolladora especializada en crear experiencias web funcionales, emocionales y memorables.
          </p>
          <a
            href="#proyectos"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"

          >
            Ver mis proyectos
          </a>
        </div>
        {/* Flecha hacia abajo animada */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
  <a href="#proyectos" aria-label="Ir a proyectos">
    <svg
      className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</div>

      </section>

      <section id="proyectos" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Proyectos destacados</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
