import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setRotate((prev) => prev + 180);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      animate={{ rotate }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 1,
      }}
      className="text-2xl text-yellow-500 dark:text-white shadow-lg p-2 rounded-full border border-yellow-300 dark:border-white hover:shadow-cyan-500/50 dark:hover:shadow-yellow-400/50 transition-all duration-300"
    >
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
};

export default ThemeToggle;
