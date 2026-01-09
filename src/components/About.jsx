import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        "JavaScript (ES6+)",
        "React",
        "Php", // I used vanilla but listed Tailwind as specific request allowed otherwise
        "Node.js",
        "Python",
        "Deep Learning",
        "SQL",
        "Git"
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Hello! My name is Dhanesh and I enjoy creating things that live on the internet. My interest in web development started with a curiosity about how things work, which led me to dive deep into coding.
                        </p>
                        <p>
                            I am a Computer Science graduate from <strong>FAST NUCES</strong>, Karachi. My journey has transitioned from academic exploration to building robust, scalable products. Currently, I focus on developing high-impact <strong>WooCommerce extensions</strong> and interactive web applications, while staying deeply engaged with the evolving world of <strong>Artificial Intelligence</strong>.
                        </p>
                        <p>
                            I strive to bridge the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
                        </p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className="skills-list">
                            {skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="about-img">
                        <div className="img-wrapper">
                            <img src="https://github.com/DanexhKum.png" alt="Dhanesh Kumar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
