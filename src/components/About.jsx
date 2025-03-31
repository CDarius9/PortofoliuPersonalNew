import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaLaptopCode,
  FaMountain,
  FaArrowRight,
  FaRegLightbulb,
  FaCode,
  FaRocket,
  FaCogs,
  FaDatabase,
  FaGamepad,
  FaGlobe,
  FaTrophy,
  FaUsers,
  FaBrain,
  FaTable,
  FaDumbbell,
  FaUserGraduate,
  FaChevronDown,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiSocketdotio, SiSqlite, SiExpress, SiTailwindcss } from 'react-icons/si';

const About = () => {
  // Animation controls and states
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('profile');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Tech stack categories
  const techData = {
    frontend: [
      { icon: <FaReact />, name: 'React', color: '#61DAFB' },
      { icon: <FaJsSquare />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
      { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
      { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38B2AC' }
    ],
    backend: [
      { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
      { icon: <SiExpress />, name: 'Express', color: '#000000' },
      { icon: <SiSqlite />, name: 'SQLite', color: '#003B57' },
      { icon: <SiSocketdotio />, name: 'Socket.io', color: '#010101' }
    ],
    tools: [
      { icon: <FaGitAlt />, name: 'Git', color: '#F05032' }
    ]
  };
  
  // Personal info categories
  const personalInfo = {
    profile: {
      title: "Profile",
      icon: FaBrain,
      content: "I'm a recent graduate in Economic Informatics from Romania, currently pursuing a Master's degree in the same field. I combine technical skills with business understanding to build user-centered applications that solve real-world problems."
    },
    experience: {
      title: "Experience",
      icon: FaLaptopCode,
      content: "My portfolio spans several full-stack applications, including e-commerce platforms built with React, Express, and SQLite. My flagship project, QuizLingua, demonstrates my ability to create complex interactive systems—it's a real-time multiplayer language learning platform that features user progression tracking, achievements system, global chat, leaderboards, and friend challenges, combining my technical expertise with my passion for language learning."
    },
    interests: {
      title: "Interests",
      icon: FaMountain,
      content: "Outside of coding, I'm an active sports enthusiast who enjoys table tennis, gym workouts, and mountain activities. I'm also passionate about gaming and learning new languages, particularly Japanese and Korean, which inspired my QuizLingua project."
    },
    education: {
      title: "Education",
      icon: FaUserGraduate,
      content: "With a Bachelor's degree in Economic Informatics and ongoing Master's studies in the same discipline, I've developed a distinctive combination of technical expertise and business insight."
    }
  };
  
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Main content container */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Full-stack developer passionate about creating digital experiences that solve real problems
          </p>
        </motion.div>
        
        {/* Personal info tabs */}
        <div className="mb-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {Object.keys(personalInfo).map((key) => {
              const IconComponent = personalInfo[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'bg-indigo-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className={activeTab === key ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'} />
                  <span>{personalInfo[key].title}</span>
                </button>
              );
            })}
          </motion.div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <div className="py-8 px-6 text-center">
                {(() => {
                  const IconComponent = personalInfo[activeTab].icon;
                  return (
                    <div className="inline-flex justify-center items-center w-16 h-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <IconComponent size={24} />
                    </div>
                  );
                })()}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {personalInfo[activeTab].title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {personalInfo[activeTab].content}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills and Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Skills section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainerVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
              </h3>
              <div className="h-px w-16 bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-indigo-100 dark:border-gray-700">
              {/* Frontend */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <FaCode size={16} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Frontend</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-8">
                  {techData.frontend.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                      <div className="text-base" style={{ color: tech.color }}>{tech.icon}</div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <FaDatabase size={16} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Backend</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-8">
                  {techData.backend.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                      <div className="text-base" style={{ color: tech.color }}>{tech.icon}</div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools & More */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <FaCogs size={16} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Tools & Soft Skills</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-8">
                  {techData.tools.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                      <div className="text-base" style={{ color: tech.color }}>{tech.icon}</div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                    <div className="text-base text-indigo-600 dark:text-indigo-400"><FaRegLightbulb /></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                    <div className="text-base text-indigo-600 dark:text-indigo-400"><FaUsers /></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Featured Project Teaser */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainerVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Spotlight <span className="text-indigo-600 dark:text-indigo-400">Project</span>
              </h3>
              <div className="h-px w-16 bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-xl shadow-lg overflow-hidden border border-indigo-100 dark:border-gray-700 relative">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-400 dark:border-indigo-500"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-indigo-400 dark:border-indigo-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-indigo-400 dark:border-indigo-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-400 dark:border-indigo-500"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <FaRocket size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">QuizLingua</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Full-Stack Language Learning Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-5 text-base">
                  My flagship project featuring real-time multiplayer quizzes, user progression, and social features for learning Japanese and Korean scripts.
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">React</span>
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">Node.js</span>
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">SQLite</span>
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">Socket.io</span>
                </div>
                
                {/* Key features teaser */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mt-0.5">
                      <FaGamepad size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">Real-time Gameplay</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mt-0.5">
                      <FaUsers size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">Social Features</h4>
                    </div>
                  </div>
                </div>
                
                {/* CTA to projects section */}
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium rounded-lg transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500"></div>
                  <div className="absolute top-0 right-full w-1/3 h-full bg-white opacity-20 skew-x-[45deg] transform group-hover:animate-shine"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <span>View Full Project Details</span>
                    <FaChevronDown className="animate-bounce text-xs" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Core strengths section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainerVariants}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core <span className="text-indigo-600 dark:text-indigo-400">Strengths</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <motion.div variants={fadeInUpVariants} className="flex flex-col items-center text-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <FaRegLightbulb size={20} />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Problem Solving</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Finding elegant, efficient solutions to complex problems</p>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex flex-col items-center text-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <FaUsers size={20} />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Collaboration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Effective communication and teamwork skills</p>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex flex-col items-center text-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <FaTable size={20} />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Economic Insight</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creating solutions with business value in mind</p>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex flex-col items-center text-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <FaDumbbell size={20} />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Continuous Growth</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Always learning and improving my skills</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600/20 overflow-hidden group"
          >
            <span className="relative z-10">Explore My Projects</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 z-0"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
          </Link>
        </motion.div>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes shine {
          100% { right: 130%; }
        }
        
        .group:hover .animate-shine {
          animation: shine 1.5s forwards linear;
        }
      `}</style>
    </section>
  );
};

export default About;