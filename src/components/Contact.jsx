import React from 'react';
import './Contact.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-content">
                <p className="subtitle text-center">What's Next?</p>
                <h2 className="title contact-title text-center">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:danexhkum@email.com" className="btn btn-primary btn-lg">Say Hello</a>

                <footer className="footer">
                    <p>Designed & Built by Dhanesh Kumar</p>
                    <p className="copyright">© {currentYear}</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
