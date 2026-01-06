import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="card" style={{ padding: '40px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Professional Background</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                                I am a dedicated Full Stack Developer with a passion for building high-quality web applications. I graduated from JSPM's RSCOE with a CGPA of 8.55. My journey in technology started with a curiosity for how things work on the internet, which led me to master the MERN stack.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '16px' }}>
                                I specialize in React for frontend development and Node.js/Express for scalable backend systems. I am a firm believer in clean code and user-centered design.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What I Do</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>✅ <b>Full Stack Web Development</b>: Building end-to-end applications.</li>
                                <li>✅ <b>API Architecture</b>: Designing robust RESTful services.</li>
                                <li>✅ <b>UI/UX Implementation</b>: Translating designs into pixel-perfect code.</li>
                                <li>✅ <b>Database Management</b>: Optimizing MongoDB queries and schemas.</li>
                                <li>✅ <b>Cloud Integration</b>: Deploying and managing AWS/Vercel apps.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
