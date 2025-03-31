import React, { useState, useRef, useEffect } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs,
  FaCss3Alt, 
  FaHtml5,
  FaChevronRight,
  FaTimes,
  FaStar
} from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiSocketdotio, SiSqlite, SiExpress, SiJsonwebtokens } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly
import quizlinguaImage from '../assets/quizlingua.png';
import romarketplaceImage from '../assets/romarketplace2.png';
import ttImage from '../assets/TT.png';
import muntexImage from '../assets/MUNTEX1.jpg';
import portfolioImage from '../assets/portfolio1.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Mapping technology names to icons
  const techIcons = {
    "React": <FaReact title="React" />,
    "Node.js": <FaNodeJs title="Node.js" />,
    "Express": <SiExpress title="Express" />,
    "SQLite": <SiSqlite title="SQLite" />,
    "MySQL": <SiMysql title="MySQL" />,
    "CSS": <FaCss3Alt title="CSS3" />,
    "HTML": <FaHtml5 title="HTML5" />,
    "Tailwind": <SiTailwindcss title="Tailwind CSS" />,
    "JWT": <SiJsonwebtokens title="JSON Web Tokens" />,
    "Socket.io": <SiSocketdotio title="Socket.io" />
  };
  
  // Projects data - using imported images
  const projects = [
    {
      id: 1,
      title: 'QuizLingua',
      description: 'A full-stack multiplayer language learning platform for Japanese and Korean scripts, featuring real-time gameplay, comprehensive progress tracking, and tiered subscription services.',
      technologies: ['React', 'Node.js', 'Express', 'SQLite', 'Socket.io', 'JWT', 'Tailwind'],
      features: [
        'Real-time multiplayer quiz system with Socket.io for websocket connections',
        'Authentication system with JWT tokens and Google OAuth integration',
        'SQLite database with custom ORM handling complex relationships',
        'Detailed user progression system with character mastery tracking',
        'Achievement system with automated validation and XP rewards',
        'Global chat with profanity filter and admin moderation controls',
        'Friend system with real-time challenges and notifications',
        'Monthly leaderboards with automated reset functionality',
        'Tiered subscription model with content-based access control',
        'Admin dashboard with content management and analytics',
        'Responsive UI designed with Tailwind CSS',
        'Comprehensive game state persistence and recovery'
      ],
      technicalDetails: [
        'Implemented Socket.io rooms for isolating multiplayer game instances',
        'Developed a transaction-based system for game results to ensure data integrity',
        'Created a custom achievement validation engine with progress tracking',
        'Built a real-time chat system with moderation queue and filtering',
        'Designed database schemas to efficiently track user progress across thousands of characters'
      ],
      challenges: [
        'Managing real-time game state across multiple clients',
        'Implementing secure authentication with session persistence',
        'Designing an optimized database schema for tracking individual character mastery',
        'Creating a fair scoring system that accounts for difficulty and response time',
        'Developing subscription-based content access control'
      ],
      link: 'https://www.quizlingua.com',
      code: 'https://github.com/Darius900/QuizLingua',
      image: quizlinguaImage, 
      category: 'fullstack',
      featured: true,
      spotlight: true
    },
    {
      id: 2,
      title: 'Marketplace [Fullstack]',
      description: 'A full-stack marketplace where users can register as sellers or buyers. Sellers can create and customize shops, add products, and manage orders and statistics.',
      technologies: ['React', 'Express', 'MySQL', 'HTML', 'CSS'],
      features: [
        'User registration and authentication',
        'Seller shop customization',
        'Product management',
        'Order tracking',
        'Statistics dashboard'
      ],
      link: 'https://darius900.github.io/ROMARKETPLACE/',
      code: 'https://github.com/Darius900/ROMARKETPLACE/tree/master',
      image: romarketplaceImage,
      category: 'fullstack',
      inProgress: true
    },
    {
      id: 3,
      title: 'Table Tennis Shop',
      description: 'A frontend implementation for a table tennis shop, featuring a main page, header carousel, products page, and product categories.',
      technologies: ['React', 'HTML', 'CSS'],
      features: [
        'Interactive product catalog',
        'Category filtering',
        'Responsive design',
        'Image carousel'
      ],
      link: 'https://darius900.github.io/TT/',
      code: 'https://github.com/Darius900/TT/tree/master',
      image: ttImage,
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Muntex E-commerce Platform',
      description: 'A full-stack e-commerce platform where users can register, login, add products to cart, place orders, pay with Stripe or cash on delivery, request refunds, and change passwords. The admin dashboard allows for managing products, stocks, orders, refund requests, employees, and providers.',
      technologies: ['React', 'SQLite', 'Express', 'HTML', 'CSS'],
      features: [
        'User authentication',
        'Shopping cart functionality',
        'Payment integration',
        'Refund processing',
        'Admin dashboard',
        'Inventory management'
      ],
      link: 'https://darius900.github.io/MUNTEX/',
      code: 'https://github.com/Darius900/MUNTEX/tree/master',
      image: muntexImage,
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      description: 'A personal portfolio website with a sleek dark theme, interactive particles background, smooth transitions, and responsive design showcasing my projects and skills.',
      technologies: ['React', 'HTML', 'CSS', 'Tailwind'],
      features: [
        'Interactive animations',
        'Responsive layout',
        'Project showcase',
        'Skills presentation',
        'Contact form'
      ],
      link: 'https://darius900.github.io/Portfolio/',
      code: 'https://github.com/Darius900/Portfolio/tree/master',
      image: portfolioImage,
      category: 'frontend'
    },
  ];
  
  // Handle project click for details view
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  // Close project detail modal
  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };
  
  // Project Card Component with enhanced QuizLingua links
  const ProjectCard = ({ project, onClick, index }) => {
    return (
      <motion.div 
        className={`rounded-xl overflow-hidden ${
          project.spotlight 
            ? 'bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-700'
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
        } shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${project.featured ? 'col-span-full md:col-span-2' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.2, 0.65, 0.3, 0.9] // Custom easing for smoother animation
        }}
        onClick={() => onClick(project)}
      >
        {/* Special spotlight badge */}
        {project.spotlight && (
          <div className="absolute top-3 left-3 z-10">
            <span className="flex items-center gap-1 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              <FaStar className="text-yellow-300" />
              <span>Spotlight Project</span>
            </span>
          </div>
        )}

        <div className="relative aspect-video overflow-hidden">
          {project.inProgress && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-yellow-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">In Progress</span>
            </div>
          )}
          
          {project.featured && !project.spotlight && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">Featured Project</span>
            </div>
          )}
          
          <img 
            src={project.image} 
            alt={`${project.title} Screenshot`} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          
          {/* Add prominent visit website banner for QuizLingua */}
          {project.title === 'QuizLingua' && project.link && (
            <div className="absolute left-0 right-0 bottom-0 p-3 flex justify-center items-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 group"
              >
                <FaExternalLinkAlt size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="text-md">Visit QuizLingua!</span>
              </a>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className={`text-xl font-bold text-gray-900 dark:text-white relative ${project.spotlight ? 'text-indigo-700 dark:text-indigo-400' : ''}`}>
              {project.title}
              <div className={`absolute -bottom-2 left-0 w-12 h-1 ${project.spotlight ? 'bg-indigo-500 dark:bg-indigo-400' : 'bg-indigo-600 dark:bg-indigo-400'} rounded-full`}></div>
            </h3>
            
            <div className="flex gap-2">
              {project.link && project.title !== 'QuizLingua' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={`${project.title} Live Site`}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={`${project.title} Source Code`}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={16} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className={`flex items-center gap-1 px-2 py-1 ${
                  project.spotlight 
                    ? 'bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-300' 
                    : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                } rounded-md text-xs font-medium`}
              >
                {techIcons[tech] && <span>{techIcons[tech]}</span>}
                <span>{tech}</span>
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          
          {/* Add second prominent button for QuizLingua */}
          {project.title === 'QuizLingua' ? (
            <div className="mt-6 flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md"
              >
                <FaExternalLinkAlt size={14} />
                <span>Visit Website</span>
              </a>
              <button 
                className="flex items-center gap-1 py-2 px-4 border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(project);
                }}
              >
                Details
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ) : (
            <button 
              className={`mt-6 ${
                project.spotlight 
                  ? 'text-indigo-700 dark:text-indigo-400' 
                  : 'text-indigo-600 dark:text-indigo-400'
              } text-sm font-medium inline-flex items-center gap-1 group`}
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
            >
              View Technical Details
              <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>
      </motion.div>
    );
  };
  
  // Project Detail Modal
  const ProjectDetailModal = ({ project, onClose }) => {
    const modalRef = useRef(null);
    
    // Handle click outside to close
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
    
    // Handle ESC key to close
    useEffect(() => {
      const handleEscKey = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }, [onClose]);
    
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          ref={modalRef}
          className={`relative ${project.spotlight ? 'bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-800 dark:to-indigo-900/10' : 'bg-white dark:bg-gray-800'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.19, 1.0, 0.22, 1.0] // Custom easing for smooth animation
          }}
        >
          <button 
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          
          <div className="relative aspect-video">
            <img 
              src={project.image} 
              alt={`${project.title} Screenshot`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.spotlight && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-indigo-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                    <FaStar className="text-yellow-300" />
                    <span>Spotlight Project</span>
                  </span>
                )}
                {project.featured && !project.spotlight && (
                  <span className="px-3 py-1 bg-indigo-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                    Featured Project
                  </span>
                )}
                {project.inProgress && (
                  <span className="px-3 py-1 bg-yellow-500/80 text-yellow-900 text-xs font-bold rounded-full backdrop-blur-sm">
                    In Progress
                  </span>
                )}
                <span className="px-3 py-1 bg-gray-800/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                  {project.category === 'fullstack' ? 'Fullstack' : 'Frontend'}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {project.spotlight && project.technicalDetails && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
                    <ul className="space-y-2 mb-6">
                      {project.technicalDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Development Challenges</h3>
                    <ul className="space-y-2 mb-6">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                    >
                      <FaGithub size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-2 p-3 ${
                        project.spotlight 
                          ? 'bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50' 
                          : 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/50'
                      } rounded-lg`}
                    >
                      <div className="text-indigo-600 dark:text-indigo-400 text-lg">
                        {techIcons[tech] ? techIcons[tech] : null}
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                
                {project.spotlight && (
                  <div className="mt-6 p-4 border border-indigo-200 dark:border-indigo-800 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/10">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Project Highlights</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Fully responsive UI with Tailwind CSS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">SQLite database with 10+ related tables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Real-time multiplayer with Socket.io</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Secure JWT authentication</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden z-10"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-50 dark:bg-indigo-900/10 skew-x-12 transform origin-top-left z-0"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My Projects
            <div className="mt-2 h-1 w-24 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </h2>
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore my portfolio of web development projects, showcasing my skills in frontend and fullstack development.
          </motion.p>
        </motion.div>
        
        {/* Projects grid - with simpler, more reliable animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeProjectDetail} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;