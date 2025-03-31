import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  
  
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/CDarius9", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:dariuscojocaru123@gmail.com", label: "Email" }
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 bg-white dark:bg-gray-900 z-10 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent"></div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/4 h-full bg-indigo-50 dark:bg-indigo-900/10 -skew-x-12 transform origin-bottom-right -z-0"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name section */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <FaCode className="text-lg" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Cojocaru Darius</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer</p>
            </div>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                {index > 0 && (
                  <div className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                )}
                
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 hover:shadow-md"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {link.label}
                  </span>
                </a>
              </React.Fragment>
            ))}
          </motion.div>
          
          {/* Copyright text */}
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex items-center justify-center gap-1">
              © {currentYear} • Built with <FaHeart className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
            </span>
          </motion.p>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;