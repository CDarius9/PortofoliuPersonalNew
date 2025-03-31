import React, { useState } from 'react';
import { FaPhone, FaLinkedin, FaGithub, FaArrowRight, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formspree.io/f/xkndyndb', {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(e.target)
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
    setLoading(false);
  };

  const contactInfo = [
    { icon: <FaPhone />, text: "+40726.609.452", href: "tel:+40726609452" },
    { icon: <FaGithub />, text: "GitHub", href: "https://github.com/CDarius9" },
    { icon: <FaLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com" },
    { icon: <FaEnvelope />, text: "dariuscojocaru123@gmail.com", href: "mailto:dariuscojocaru123@gmail.com" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const contactCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden z-10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 dark:bg-indigo-900/10 -skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-50 dark:bg-indigo-900/10 skew-x-12 transform origin-bottom-left z-0"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Me
            <div className="mt-2 h-1 w-24 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact cards */}
          <motion.div
            className="md:col-span-1 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300 hover:-translate-y-1 group"
                variants={contactCardVariants}
                custom={index}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-[160px]">{item.text}</span>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 dark:bg-indigo-900/10 rounded-bl-full -z-0 opacity-70"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <label 
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'name' || formData.name 
                            ? '-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 px-1' 
                            : 'top-3 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20"
                      />
                    </div>

                    <div className="relative">
                      <label 
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'email' || formData.email 
                            ? '-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 px-1' 
                            : 'top-3 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20"
                      />
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <label 
                      className={`absolute left-3 transition-all duration-200 ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 px-1' 
                          : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="6"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 resize-none"
                    />
                  </div>

                  <motion.button 
                    type="submit"
                    className="group relative overflow-hidden px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600/20 disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? 'Sending...' : 'Send Message'}
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                  </motion.button>

                  {status === 'success' && (
                    <motion.div 
                      className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span>Your message has been sent successfully!</span>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div 
                      className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 text-red-800 dark:text-red-300 rounded-lg flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
                      <span>Failed to send message. Please try again or contact me directly.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
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

export default Contact;