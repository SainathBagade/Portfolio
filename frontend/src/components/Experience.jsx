import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Tech Solutions Inc.",
            role: "Full Stack Developer Intern.",
            period: "June 2024 - August 2024",
            desc: "Developed and maintained web applications using the MERN stack. Improved application performance by 20% through code optimization.",
            skills: ["React", "Node.js", "MongoDB"]
        },
        {
            company: "Digital Edge Agency",
            role: "Frontend Developer Trainee",
            period: "January 2024 - May 2024",
            desc: "Collaborated with the design team to create responsive and user-friendly interfaces. Implemented state management using Redux.",
            skills: ["JavaScript", "HTML/CSS", "React"]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{ padding: '30px', display: 'flex', gap: '20px' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(10, 102, 194, 0.1)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                flexShrink: 0
                            }}>
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>{exp.role}</h3>
                                        <p style={{ color: 'var(--primary)', fontWeight: 600 }}>{exp.company}</p>
                                    </div>
                                    <span className="badge">{exp.period}</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>{exp.desc}</p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="badge" style={{ background: 'var(--secondary)', color: 'var(--primary)' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
