// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300 text-sm py-4 text-center mt-10">
      <p>
        © {new Date().getFullYear()} Dinesh Alagar. Built with ❤️ using React Js.
      </p>
      <p className="mt-1">Thank you for visiting!</p>
    </footer>
  );
};

export default Footer;
