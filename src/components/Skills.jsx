import React from 'react';
import { motion } from 'framer-motion'; 
import './Skills.css';

import JavaScriptLogo from '../assets/logojs.png';
import ReactLogo from '../assets/react.png';
import NodejsLogo from '../assets/nodejs.png';
import ExpressjsLogo from '../assets/express.png';
import SQLLogo from '../assets/sql.png';
import HTMLCSS from '../assets/htmlcss.png';

const TechStack = () => {
    const techStack = [
        { name: 'JavaScript', logo: JavaScriptLogo, description: 'Your experience with JavaScript' },
        { name: 'React', logo: ReactLogo, description: 'Your experience with React' },
        { name: 'Node.js', logo: NodejsLogo, description: 'Your experience with Node.js' },
        { name: 'Express.js', logo: ExpressjsLogo, description: 'Your experience with Express.js' },
        { name: 'SQL', logo: SQLLogo, description: 'Your experience with SQL' },
        { name: 'HTML&CSS', logo: HTMLCSS, description: 'Your experience with SQL' },
    ];

    const techVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.3,
                duration: 1.0,
            },
        }),
    };

    return (
        <section id="tech-stack" className="tech-stack-section">
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-stack-container">
                {techStack.map((tech, index) => (
                    <motion.article 
                        className="tech-item"
                        key={index}
                        custom={index}
                        variants={techVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                        <h3 className="tech-name">{tech.name}</h3>
                        <p className="tech-description">{tech.description}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
