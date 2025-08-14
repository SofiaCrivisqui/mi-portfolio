import React from "react";

/**
 * Props:
 * - phone: número en formato internacional sin + ni espacios. Ej: "5491123456789"
 * - message: texto inicial (opcional)
 * - variant: "all" | "mobile" | "desktop"  (opcional)
 */
export default function WhatsAppButton({
  phone = "5493513726257",
  message = "Hola! Me contacto desde tu portfolio.",
  variant = "all"
}) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`; // funciona bien en móvil y web

  // clases según visibilidad
  const visibility =
    variant === "mobile" ? "md:hidden" : variant === "desktop" ? "hidden md:flex" : "flex";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className={`${visibility} fixed right-4 bottom-[calc(env(safe-area-inset-bottom,16px)+1rem)] z-50 items-center justify-center w-14 h-14 rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400`}
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      {/* Icono WhatsApp (SVG ligero) */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.3 8.38 8.38 0 0 1 3.8.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2l-5.2 5.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.3 7.7c-.1.1-.8 1-.9 1.1s-.6.2-1 .1c-.5-.1-1.9-.9-3.6 1.1s-1.9 2.6-1.9 3.1c0 .5.1.9.5 1.2.4.3.8.8 1.6 1.5s1.7 1.2 2.3 1.4c.6.3 1 .3 1.4.2.4-.1 1.2-.5 2.2-1.4 1-.9 1.3-1.6 1.5-2 .2-.4.1-.8 0-1.1-.1-.3-.9-1.1-1.3-1.4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* etiqueta accesible para lectores de pantalla */}
      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  );
}
