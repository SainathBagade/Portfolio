import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Terminal, Cloud } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Coding Languages",
            icon: <Terminal className="text-primary" />,
            skills: ["C++", "JavaScript (ES6+)"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="text-primary" />,
            skills: ["HTML", "CSS", "React.js", "Tailwind CSS", "Material UI"]
        },
        {
            title: "Backend Development",
            icon: <Database className="text-primary" />,
            skills: ["Node.js", "Express.js", "Mongoose", "REST APIs", "JWT Auth"]
        },
        {
            title: "Database",
            icon: <Settings className="text-primary" />,
            skills: ["MySQL", "MongoDB", "Postgre"]
        },
        {
            title: "Other",
            icon: <Settings className="text-primary" />,
            skills: ["GitHub", "Hoppscotch", "Vercel", "Render"]
        }
    ];

    return (
        <section id="skills" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '24px'
                }}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="card"
                            style={{ padding: '30px', borderTop: '4px solid var(--primary)' }}
                        >
                            <div style={{
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <div style={{
                                    padding: '10px',
                                    background: 'rgba(10, 102, 194, 0.05)',
                                    borderRadius: '8px'
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{cat.title}</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {cat.skills.map(skill => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(10, 102, 194, 0.1)' }}
                                        className="badge"
                                        style={{ cursor: 'default', transition: 'all 0.2s' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
