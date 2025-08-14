// src/components/WhatsAppButton.jsx
import React from "react";

/**
 * WhatsApp floating button con SVG + fallback a PNG.
 * Colocar /public/img/whatsapp.png si necesitás fallback.
 */
export default function WhatsAppButton({
  phone = "5493513726257",
  message = "Hola! Vi tu portfolio",
  variant = "all" // "mobile", "desktop", "all"
}) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;

  const visibility =
    variant === "mobile" ? "md:hidden" : variant === "desktop" ? "hidden md:flex" : "flex";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className={`${visibility} fixed right-4 bottom-[calc(env(safe-area-inset-bottom,16px)+1rem)] z-50 items-center justify-center w-16 h-16 rounded-full shadow-2xl transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400`}
      style={{
        background: "linear-gradient(135deg,#25D366,#128C7E)",
        // asegúrate que no haya filtros que opaquen el SVG
        filter: "none",
      }}
    >
      {/* SVG (usa fill=currentColor para respetar color de texto del contenedor) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8"
        style={{ color: "#fff" }} // asegura que currentColor sea blanco
        aria-hidden="true"
      >
        {/* Path del logo (versión rellenada del icono WhatsApp) */}
        <path
          fill="currentColor"
          d="M380.9 97.1C339-...resto-del-path..." /* reemplazar con path real si querés 1:1 */
        />
      </svg>

      {/* Si el SVG no funciona por alguna razón, usa una imagen fallback (pon whatsapp.png en public/img/) */}
      <img
        src="/img/whatsapp_3536445.png"
        alt="WhatsApp"
        className="w-8 h-8 hidden"
        onError={(e) => {
          /* Si no existe la imagen no pasa nada; img está oculta por defecto */
        }}
        style={{ display: "none" }}
      />

      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  );
}
