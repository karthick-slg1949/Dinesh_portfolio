// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, role, liveLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-slate-300 text-sm mb-2">{description}</p>
      <p className="text-gray-500 dark:text-slate-400 text-sm mb-4 italic">{role}</p>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-auto px-4 py-2 bg-cyan-700 dark:bg-cyan-600 text-white rounded-md hover:bg-cyan-600 dark:hover:bg-cyan-500 transition"
      >
        View Live
      </a>
    </motion.div>
  );
};

export default ProjectCard;
