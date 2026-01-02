import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "Web Development",
        description: "A comprehensive collection of web development projects showcasing skills in HTML, CSS, and JavaScript. Includes responsive designs and interactive elements.",
        tags: ["JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/DanexhKum/Web"
    },
    {
        title: "Sentimental Detection",
        description: "AI-powered sentiment analysis tool using Python. Analyzes text data to determine emotional tone using Natural Language Processing techniques.",
        tags: ["Python", "NLP", "Machine Learning", "Jupyter"],
        github: "https://github.com/DanexhKum/Sentimental_Detection"
    },
    {
        title: "Data Analytics",
        description: "Data visualization and analysis projects exploring various datasets. Features statistical analysis and graphical representations.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Science"],
        github: "https://github.com/DanexhKum/Data-Analytics"
    },
    {
        title: "Software Testing",
        description: "Implementation of software testing methodologies and QA practices. Focuses on unit testing and integration testing strategies.",
        tags: ["QA", "Testing", "Methodologies"],
        github: "https://github.com/DanexhKum/Software-Testing-Project"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="title">Some Things I've Built</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="card-header">
                                <Folder className="folder-icon" size={40} />
                                <div className="card-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link"><Github size={20} /></a>
                                </div>
                            </div>
                            <h3 className="project-title">
                                <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a>
                            </h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-tags">
                                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
