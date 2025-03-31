import React, { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Intro = () => {
  // Typing effect state
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Web Developer', 'Problem Solver', 'Creative Thinker'];
  
  // Code editor state
  const [activeCodeTab, setActiveCodeTab] = useState('developer');
  
  // Animation state for staggered effects
  const [showControls, setShowControls] = useState(false);
  
  // Handle typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          // Pause at the end of typing
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }, 150);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  
  // Show controls after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative h-screen bg-white dark:bg-gray-900 overflow-hidden font-sans">
      {/* Asymmetric background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-indigo-50 dark:bg-indigo-900/10 -skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-indigo-100 dark:bg-indigo-800/10 -skew-x-12 transform origin-bottom-right z-0"></div>
      
      {/* Subtle particle effect */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366F1",
            },
            links: {
              color: "#6366F1",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12 items-center"
        >
          {/* Left column - larger - content */}
          <div className="lg:col-span-4">
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
              <span className="h-px w-12 bg-indigo-500"></span>
              <span className="font-medium text-indigo-500 text-sm uppercase tracking-wider">Full-Stack Developer</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            >
              <span className="relative">
                Hello, I'm{" "}
                <span className="text-indigo-600 dark:text-indigo-400">Darius</span>
                <span className="absolute -top-1 right-0 text-3xl">👋</span>
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-12"
            >
              A passionate {displayText}
              <span className="inline-block w-[3px] h-6 bg-indigo-500 ml-1 align-middle animate-blink"></span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
            >
              I transform ideas into exceptional digital experiences with clean code, thoughtful design, and a focus on user experience. My approach combines creativity and technical precision to build solutions that make an impact.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap md:flex-nowrap gap-4 mb-12"
            >
              <button 
                onClick={scrollToAbout}
                className="group relative overflow-hidden px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                <span className="relative z-10">View Projects</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
                Contact Me
              </button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              {[
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/CDarius9", label: "GitHub" },
                { icon: FaEnvelope, href: "mailto:dariuscojocaru123@gmail.com", label: "Email" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* Right column - VS Code-style editor with functional tabs */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* VS Code-style editor */}
              <div className="absolute inset-0 bg-gray-900 flex flex-col">
                {/* Editor header/tabs */}
                <div className="bg-gray-800 text-gray-400 text-sm flex items-center border-b border-gray-700">
                  <button 
                    onClick={() => setActiveCodeTab('developer')}
                    className={`py-2 px-4 flex items-center gap-2 border-r border-gray-700 transition-colors ${
                      activeCodeTab === 'developer' ? 'bg-gray-900 text-white' : 'hover:bg-gray-800/80 hover:text-gray-200'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    developer.js
                  </button>
                  <button 
                    onClick={() => setActiveCodeTab('projects')}
                    className={`py-2 px-4 border-r border-gray-700 transition-colors ${
                      activeCodeTab === 'projects' ? 'bg-gray-900 text-white' : 'hover:bg-gray-800/80 hover:text-gray-200'
                    }`}
                  >
                    projects.js
                  </button>
                  <button 
                    onClick={() => setActiveCodeTab('skills')}
                    className={`py-2 px-4 border-r border-gray-700 transition-colors ${
                      activeCodeTab === 'skills' ? 'bg-gray-900 text-white' : 'hover:bg-gray-800/80 hover:text-gray-200'
                    }`}
                  >
                    skills.js
                  </button>
                </div>
                
                {/* Code content */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Line numbers - dynamically adjust based on content */}
                  <div className="bg-gray-900 w-12 flex-shrink-0 pt-4 pb-4 text-right pr-3 text-gray-600 font-mono text-xs select-none">
                    {Array.from({ length: 
                      activeCodeTab === 'developer' ? 10 : 
                      activeCodeTab === 'projects' ? 10 : 
                      12 
                    }, (_, i) => (
                      <div key={i + 1} className="leading-loose">{i + 1}</div>
                    ))}
                  </div>
                  
                  {/* Developer code */}
                  {activeCodeTab === 'developer' && (
                    <div className="flex-1 p-4 overflow-hidden font-mono text-sm">
                      <div>
                        <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {"{"}
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">name:</span> <span className="text-yellow-300">'Cojocaru Darius'</span>,
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">role:</span> <span className="text-yellow-300">'Full-Stack Developer'</span>,
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">location:</span> <span className="text-yellow-300">'Romania'</span>,
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">education:</span> <span className="text-yellow-300">'Economic Informatics'</span>,
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">languages:</span> [<span className="text-yellow-300">'English'</span>, <span className="text-yellow-300">'Romanian'</span>],
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">hobbies:</span> [<span className="text-yellow-300">'Sports'</span>, <span className="text-yellow-300">'Gaming'</span>, <span className="text-yellow-300">'Hiking'</span>],
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">available:</span> <span className="text-blue-400">true</span>
                      </div>
                      <div className="text-white">{"};"}</div>
                    </div>
                  )}
                  
                  {/* Projects code - VARIANT 3 with spread operator and shorter comment */}
                  {activeCodeTab === 'projects' && (
                    <div className="flex-1 p-4 overflow-hidden font-mono text-sm">
                      <div>
                        <span className="text-pink-500">const</span> <span className="text-blue-400">projects</span> = [
                      </div>
                      <div className="pl-6 text-white">
                        {"{"}
                      </div>
                      <div className="pl-10 text-white">
                        <span className="text-pink-500">name:</span> <span className="text-yellow-300">'QuizLingua'</span>,
                      </div>
                      <div className="pl-10 text-white">
                        <span className="text-pink-500">tech:</span> <span className="text-yellow-300">'React, Node.js, SQLite, Socket.io'</span>,
                      </div>
                      <div className="pl-10 text-white">
                        <span className="text-pink-500">description:</span> <span className="text-yellow-300">'Multiplayer language learning platform'</span>
                      </div>
                      <div className="pl-6 text-white">
                        {"}"},
                      </div>
                      <div className="pl-6 text-white">
                        {"{"} <span className="text-pink-500">name:</span> <span className="text-yellow-300">'E-Commerce Platform'</span> {"}"},
                      </div>
                      <div className="pl-6 text-white">
                        ...<span className="text-blue-400">moreProjects</span> <span className="text-green-500">// More</span>
                      </div>
                      <div className="text-white">];</div>
                    </div>
                  )}
                  
                  {/* Skills code */}
                  {activeCodeTab === 'skills' && (
                    <div className="flex-1 p-4 overflow-hidden font-mono text-sm">
                      <div>
                        <span className="text-pink-500">const</span> <span className="text-blue-400">skills</span> = {"{"}
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">frontend:</span> [
                      </div>
                      <div className="pl-10 text-white">
                        <span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'JavaScript'</span>, <span className="text-yellow-300">'TypeScript'</span>,
                      </div>
                      <div className="pl-10 text-white">
                        <span className="text-yellow-300">'HTML5'</span>, <span className="text-yellow-300">'CSS3'</span>, <span className="text-yellow-300">'Tailwind CSS'</span>
                      </div>
                      <div className="pl-6 text-white">
                        ],
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">backend:</span> [<span className="text-yellow-300">'Node.js'</span>, <span className="text-yellow-300">'Express'</span>, <span className="text-yellow-300">'SQLite'</span>],
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">tools:</span> [<span className="text-yellow-300">'Git'</span>, <span className="text-yellow-300">'VS Code'</span>],
                      </div>
                      <div className="pl-6 text-white">
                        <span className="text-pink-500">other:</span> [<span className="text-yellow-300">'UI/UX Design'</span>, <span className="text-yellow-300">'Problem Solving'</span>]
                      </div>
                      <div className="text-white">{"};"}</div>
                    </div>
                  )}
                </div>
                
                {/* Status bar */}
                <div className="bg-indigo-600 dark:bg-indigo-700 text-white text-xs py-1 px-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-800 px-1 rounded">portfolio</span>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    {activeCodeTab === 'developer' ? 'Profile' : 
                     activeCodeTab === 'projects' ? 'Projects' : 'Skills'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showControls ? 1 : 0,
          y: showControls ? 0 : 10
        }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaChevronDown />
          </motion.div>
        </button>
      </motion.div>
      
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Intro;