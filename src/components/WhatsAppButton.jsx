// src/components/WhatsAppButton.jsx
import React, { useState } from "react";

export default function WhatsAppButton({
  phone = "5493513726257",
  message = "Hola! Vi tu portfolio",
  variant = "all" // "mobile", "desktop", "all"
}) {
  const [useImgFallback, setUseImgFallback] = useState(false);
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
        filter: "none",
      }}
    >
      {/* SVG oficial de WhatsApp (versión rellena) */}
      {!useImgFallback && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8"
          style={{ color: "#fff", display: "block" }} // currentColor será blanco
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.2 286.6 32 232 32 132.9 32 48 116.9 48 216c0 38 10.2 74.5 29.6 106.8L24 464l143.8-53.5C188.8 420.6 209 424 231 424c99 0 183.9-84.9 183.9-184 0-54.6-23.2-107-74-143zM231 391.5c-19.5 0-38.5-3.7-55.6-10.8l-3.9-1.6-85.5 31.8 31.2-83.7-1.8-4C64.9 290 56 254.6 56 216 56 136.2 128.2 64 208 64c47.9 0 92 19 125.3 52.3 33.3 33.3 52.3 77.4 52.3 125.3 0 79.2-64.3 143.5-143.6 143.2zM324.3 286.6l-21.1 1c-5.5.3-10.7-2.3-14-6.8l-9.9-13.2c-3.3-4.4-8.8-7.1-14.6-7l-16.7.1c-1.9 0-3.4-1.6-3.4-3.5v-18.7c0-2.1 1.2-4 3-4.8 4.6-2.4 10.6-6.1 13.4-8.2 4-3 6.3-7.9 6.2-13V180c0-2.8-1.6-5.4-4.2-6.8-10.6-6-19.2-11.5-30.3-16.8-10.3-4.9-20.9-0.6-25.6 1.6-3.8 1.7-7 5-8.1 9l-3.9 17.9c-1.3 6.1 1.4 12.3 6.9 15.7 5.9 3.6 14.8 8.8 17.9 10.5 3.1 1.7 5.4 4.7 6.6 8l1.7 4.2c.9 2.3.8 4.8-.2 6.9-3.3 7.7-7 15.1-11 22.2-4 7-8.5 13.9-13.4 20.6-1.6 2.3-4.8 3.4-7.6 2.6-4.3-1.2-8.7-2.8-12.9-4.6-3.6-1.5-8-0.2-9.9 3.2-4.9 8.7-9.1 17.8-12.6 27.1-1.2 3.3.4 6.9 3.7 8.3 16 7.6 34.5 11.8 52.4 11.8 58.4 0 110.1-47.5 110.1-105.9 0-23.5-7.9-44.6-22.4-62.9-3.1-3.7-8.7-4.6-12.6-2.2z"
          />
        </svg>
      )}

      {/* Imagen fallback: si preferís usarla, pon el archivo en public/img/whatsapp.png */}
      <img
        src="/img/whatsapp.png"
        alt="WhatsApp"
        className="w-8 h-8"
        style={{ display: useImgFallback ? "block" : "none" }}
        onError={() => setUseImgFallback(false)}
        onLoad={() => setUseImgFallback(true)}
      />

      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  );
}
