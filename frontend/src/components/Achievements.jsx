import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Database, Code, Cloud } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "Solved 500+ Data Structures & Algorithms problems",
            issuer: "LeetCode",
            date: "Ongoing",
            icon: <Code size={32} />
        },
        {
            title: "AWS SimuLearn: Cloud Practitioner",
            issuer: "AWS",
            date: "2025",
            icon: <Cloud size={32} />
        },
        {
            title: "MongoDB & Oracle Certifications",
            issuer: "University/Industry",
            date: "2025",
            icon: <Database size={32} />
        }
    ];

    return (
        <section id="achievements" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">Achievements & Certifications</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{ padding: '30px', textAlign: 'center' }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '5px' }}>{item.issuer}</p>
                            <span className="badge">{item.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
