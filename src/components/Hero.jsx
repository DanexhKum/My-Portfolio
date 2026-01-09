import React from 'react';
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">Hi, my name is</p>
                    <h1 className="hero-title">
                        Dhanesh Kumar.
                        <br />
                        <span className="text-muted">I build things for the B2B.</span>
                    </h1>
                    <p className="hero-description">
                        I'm a Full-Stack Web Developer and a Computer Science graduate from FAST NUCES.
                        I specialize in building premium digital experiences, high-performance eCommerce solutions, and exploring Artificial Intelligence.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            Check out my work <ArrowRight size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/danexhkum/" target="_blank" rel="noreferrer" className="btn btn-outline">
                            Get In Touch
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/DanexhKum" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/danexhkum/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:danexhkum@email.com" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
