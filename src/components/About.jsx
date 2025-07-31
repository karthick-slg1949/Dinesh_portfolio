import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gray-50 text-black dark:bg-slate-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-lg leading-relaxed space-y-5 text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Dinesh Alagar</span>, a passionate front-end developer. I love crafting visually appealing and user-friendly web applications.            I’m always eager to learn and grow — whether it's exploring new frameworks or contributing to creative projects that solve problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
