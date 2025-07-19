import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {  SiMongodb, SiMysql, SiPython } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React.js' },
  { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  { icon: <SiPython className="text-cyan-500" />, name: 'python' },
  { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <FaDatabase className="text-purple-600" />, name: 'Database' },
  { icon: <FaGitAlt className="text-red-600" />, name: 'Git' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-white text-black dark:bg-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 text-center mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border dark:border-slate-700 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
