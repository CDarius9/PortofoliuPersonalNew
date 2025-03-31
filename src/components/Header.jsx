import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import the PDF directly - this is the key change
import resumePdf from '../assets/resume1.pdf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItemVariants = {
    hidden: { 
      y: -20, 
      opacity: 0 
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: custom * 0.1
      }
    })
  };
  
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Background with enhanced contrast but still transparent effect */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800' 
            : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        {/* Asymmetric accent element with enhanced contrast */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/4 bg-indigo-100/80 dark:bg-indigo-900/30 -skew-x-12 transform origin-top-left transition-all duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-70'
          }`}
        ></div>
      </div>
      
      <div className="max-w-[95%] mx-auto relative z-10 flex justify-between items-center">
        {/* Logo section - pushed further left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center pl-6"
        >
          <Link
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-2xl font-bold tracking-tight cursor-pointer group"
          >
            <span className="inline-block relative">
              <span className="text-indigo-600 dark:text-indigo-400">D</span>arius
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center ml-8">
            <span className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-3"></span>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Full Stack Web Developer
            </p>
          </div>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="block md:hidden text-gray-800 dark:text-white focus:outline-none z-20 pr-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FaBars className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
        
        {/* Desktop navigation - pushed further right */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center gap-4 pr-6"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                activeClass="text-indigo-600 dark:text-indigo-400 font-medium"
                to={item.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 ease-in-out"></span>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            custom={navItems.length}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            className="ml-4"
          >
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              download="Darius_Resume.pdf"
              className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 text-sm font-medium"
            >
              <FaDownload className="mr-2 text-xs" /> Resume
            </a>
          </motion.div>
        </motion.nav>
        
        {/* Mobile menu panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg overflow-hidden z-10 mt-0 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        activeClass="text-indigo-600 dark:text-indigo-400 font-medium"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="block py-3 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg font-medium border-b border-gray-100 dark:border-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="mt-2 pt-2"
                  >
                    <a
                      href={resumePdf}
                      target="_blank"
                      rel="noreferrer"
                      download="Darius_Resume.pdf"
                      className="inline-flex items-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaDownload className="mr-2" /> Download Resume
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Subtle bottom border that appears on scroll for better header definition */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </header>
  );
};

export default Header;