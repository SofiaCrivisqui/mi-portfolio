import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ name, description, image, link, tags }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-orange-100 text-indigo-700 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Ver sitio
        </a>
      </div>
    </motion.div>
  );
}
