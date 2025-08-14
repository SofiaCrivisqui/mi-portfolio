import React from "react";

export default function WhatsAppButton({
  phone = "35493513726257",
  message = "Hola! Vi tu portfolio",
  variant = "all" // "mobile", "desktop" o "all"
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
      className={`${visibility} fixed right-4 bottom-[calc(env(safe-area-inset-bottom,16px)+1rem)] z-50 items-center justify-center w-16 h-16 rounded-full shadow-2xl transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 text-white`}
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      {/* SVG con fill=currentColor para asegurar que tome text-white */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Versión rellena del logo WhatsApp — se verá bien sobre fondo verde */}
        <path d="M16.01 3.02C9.3 3.02 3.98 8.34 3.98 15.05c0 2.66.86 5.12 2.34 7.15L3 29l6.03-3.13a11.99 11.99 0 0 0 6.98 2.11c6.71 0 12.03-5.32 12.03-12.03S22.72 3.02 16.01 3.02zm6.94 18.3c-.26.72-1.53 1.37-2.12 1.46-.56.08-1.23.11-2.06-.08-3.56-.83-5.86-3.55-6.79-4.77-.6-.82-.51-1.19-.11-1.67.37-.46.86-.6 1.29-.86.16-.09.33-.19.49-.28.16-.09.26-.14.38-.09.12.05.69.25 1.01.34.3.09.49.14.71.22.23.08.48.04.74-.02.26-.06 1.63-.75 1.89-.83.27-.09.47-.14.68.05.21.19.9.67 1.08.8.18.13.3.19.15.37-.15.18-.34.38-.49.52-.15.13-.31.28-.22.48.09.21.42.92.9 1.5.61.75 1.12 1.02 1.43 1.13.31.11.5.08.68-.05.18-.13.76-.48.92-.65.16-.17.35-.17.62-.12.26.05 1.72.79 2.02.94.3.15.5.22.57.34.07.12.07.71-.19 1.43z" />
      </svg>

      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  );
}