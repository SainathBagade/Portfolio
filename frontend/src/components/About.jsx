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
                                I am a B.Tech third-year Computer Engineering student with a CGPA of 8.55 at JSPM’s Rajarshi Shahu College of Engineering (RSCOE) and an aspiring Full Stack Developer interested in building scalable and user-friendly web applications.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '16px' }}>
                                Driven by curiosity about modern web technologies, I work with the MERN stack and focus on writing clean, maintainable code with emphasis on performance and usability. I actively build projects to strengthen my practical skills and am seeking internship and real-world opportunities to gain industry exposure and grow as a developer.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What I Do</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>✅ <b>Full Stack Web Development</b>: Building end-to-end web applications using modern full-stack technologies.</li>
                                <li>✅ <b>API Development & Integration</b>: Designing and implementing secure, scalable RESTful APIs.</li>
                                <li>✅ <b>UI/UX Implementation</b>: Converting design concepts into responsive, user-friendly interfaces.</li>
                                <li>✅ <b>Database Management</b>: Designing schemas and managing data efficiently using MongoDB.</li>
                                <li>✅ <b>Deployment & Hosting</b>: Deploying and managing applications using cloud platforms such as Vercel and AWS.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
