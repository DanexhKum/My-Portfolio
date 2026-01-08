import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "B2B eCommerce for WooCommerce",
        description: "A complete B2B solution for WooCommerce stores. Features include wholesale pricing, customer visibility control, tax exemptions, and custom registration forms for B2B customers.",
        tags: ["WooCommerce", "WordPress", "PHP", "B2B"],
        external: "https://woocommerce.com/products/b2b-ecommerce-for-woocommerce/"
    },
    {
        title: "Product Tables for WooCommerce",
        description: "Optimizes product display by listing items in a searchable, sortable table layout. Perfect for wholesale catalogs, restaurant menus, and bulk order forms.",
        tags: ["WooCommerce", "React", "Frontend"],
        external: "https://woocommerce.com/products/product-tables-for-woocommerce/"
    },
    {
        title: "Subscriptions Add-on",
        description: "Extends WooCommerce Subscriptions with advanced features like subscription pausing, cancellation reasoning, and administrative management tools.",
        tags: ["WooCommerce", "Extensions", "PHP"],
        external: "https://woocommerce.com/products/subscriptions-add-on-for-woocommerce/"
    },
    {
        title: "Wholesale Page Customizer",
        description: "Allows store owners to customize single product pages specifically for wholesale customers, offering a tailored purchasing experience.",
        tags: ["WooCommerce", "Customization"],
        external: "https://woocommerce.com/products/wholesale-product-page-customizer-for-woocommerce/"
    },
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
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.external && (
                                        <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">
                                <a href={project.external || project.github} target="_blank" rel="noreferrer">
                                    {project.title}
                                </a>
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
