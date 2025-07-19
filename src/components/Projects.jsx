// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Weather App",
    description:
      "A responsive React app that fetches real-time weather data via a Weather API. Built with HTML, CSS, and JavaScript for seamless interaction.",
    role:
      "Sole Developer — handled UI with React, API integration, and data rendering.",
    liveLink: "https://weather-app-3-steel.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A web-based two-player Tic Tac Toe game with HTML, CSS, and JavaScript, featuring full logic for turns, win/draw detection, and reset.",
    role:
      "Sole Developer — implemented complete logic and UI from scratch using vanilla JS.",
    liveLink: "https://3ttt-game.netlify.app/",
  },
  {
    title: "Dashboard",
    description:
      "A modern, responsive dashboard UI with clean layout, interactive widgets, and device-friendly UX — hosted on Vercel.",
    role:
      "Front-End Developer — designed & built full UI with focus on UX and responsiveness.",
    liveLink: "https://dashboard-xi-pink-14.vercel.app/",
  },
  {
    title: "Product Listing Page",
    description:
      "Responsive and visually appealing product catalog layout with product cards, hosted on Vercel for fast browsing.",
    role:
      "Front-End Developer — created grid layout, styled product cards, and ensured mobile responsiveness.",
    liveLink: "https://product-listing-page-gilt-mu.vercel.app/",
  },
];

// Animation variants for parent and children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
  return (
    <section
      className="px-6 py-20 bg-white text-black dark:bg-slate-900 dark:text-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-10 text-center">
          My Projects
        </h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                role={project.role}
                liveLink={project.liveLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
