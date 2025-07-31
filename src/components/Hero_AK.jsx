import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-slate-900 text-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
          Hi, I'm Dinesh Alagar
        </h1>
        <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
          I am 2nd year Bachelor Student in Information Technology at Arumugam Pillai Seethai Ammal College Thiruppathur.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <FaArrowDown className="text-cyan-500 animate-bounce text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
