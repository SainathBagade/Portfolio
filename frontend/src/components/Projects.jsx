import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ecomindImg from '../assets/ecomind.png';
import truestayImg from '../assets/TrueStay.png';

const Projects = () => {
    const projects = [
        {
            title: "EcoMinds",
            desc: "Learn, Play, Save the Planet! Interactive lessons, quizzes, and real-world challenges for environmental science education.",
            tech: ["React", "Node.js", "MongoDB", "Educational Tech"],
            image: ecomindImg,
            links: { github: "https://github.com/SainathBagade/Ecominds", demo: "https://finalecominds.vercel.app/" }
        },
        {
            title: "TrueStay",
            desc: "A modern home rental platform with advanced search, booking management, and property listings.",
            tech: ["React", "Express", "MongoDB", "Stripe"],
            image: truestayImg,
            links: { github: "https://github.com/SainathBagade/TrueStay", demo: "https://truestay-wp80.onrender.com" }
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Best Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="card"
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div className="img-hover-zoom" style={{ height: '220px', position: 'relative' }}>
                                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div className="project-overlay" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(10, 102, 194, 0.4)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '20px'
                                }}>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={proj.links.github}
                                        target="_blank"
                                        style={{ background: 'white', color: 'black', padding: '10px', borderRadius: '50%' }}
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={proj.links.demo}
                                        target="_blank"
                                        style={{ background: 'white', color: 'black', padding: '10px', borderRadius: '50%' }}
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>
                            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{proj.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem', flex: 1 }}>{proj.desc}</p>
                                <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', transition: 'all 0.3s ease', opacity: 0, transform: 'translateY(10px)' }}>
                                    {proj.tech.map(t => (
                                        <span key={t} className="badge" style={{ fontSize: '0.75rem', background: 'rgba(10, 102, 194, 0.05)', color: 'var(--primary)', border: '1px solid rgba(10, 102, 194, 0.1)' }}>{t}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <a href={proj.links.github} target="_blank" className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
                                        <Github size={16} style={{ marginRight: '6px' }} /> GitHub
                                    </a>
                                    <a href={proj.links.demo} target="_blank" className="btn btn-primary" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
                                        <ExternalLink size={16} style={{ marginRight: '6px' }} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .card:hover .project-overlay {
                    opacity: 1 !important;
                }
                .card:hover .tech-stack {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
