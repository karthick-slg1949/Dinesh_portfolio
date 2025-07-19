import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [statusColor, setStatusColor] = useState('green');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    setStatusColor('blue');

    try {
      await axios.post('https://formspree.io/f/mrblezoz', formData, {
        headers: {
          Accept: 'application/json'
        }
      });

      setFormStatus('✅ Message sent successfully!');
      setStatusColor('green');

      // Clear form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      setFormStatus('❌ Failed to send message. Please try again later.');
      setStatusColor('red');
    }

    // Auto-hide status after 3 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 3000);
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white dark:bg-slate-900 text-black dark:text-white">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl text-cyan-500" />
              <span className="text-base dark:text-slate-300">dhineshalagar910@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-cyan-500" />
              <span className="text-base dark:text-slate-300">+91 9876543210</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-cyan-500" />
              <span className="text-base dark:text-slate-300">Sivaganga, Tamil Nadu</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-cyan-600 hover:text-cyan-400 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="text-cyan-600 hover:text-cyan-400 text-2xl">
                <FaGithub />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-400 text-2xl">
                <FaWhatsapp />
              </a>
              <a href="mailto:karthickalagar8@gmail.com" className="text-red-600 hover:text-red-400 text-2xl">
                <MdEmail />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>

            {formStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm mt-2 px-4 py-2 rounded-md text-white ${
                  statusColor === 'green' ? 'bg-green-500' :
                  statusColor === 'red' ? 'bg-red-500' : 'bg-blue-500'
                }`}
              >
                {formStatus}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
