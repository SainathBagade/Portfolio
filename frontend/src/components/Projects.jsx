import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Enterprise",
            desc: "Full-scale e-commerce solution with integrated payment gateways and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Redux"],
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
            links: { github: "https://github.com/bagadesai4", demo: "#" }
        },
        {
            title: "Project Management Tool",
            desc: "Collaborative workspace for teams with real-time updates and task tracking features.",
            tech: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
            image: "https://images.unsplash.com/photo-1454165833742-272138e4a21e?auto=format&fit=crop&q=80&w=800",
            links: { github: "https://github.com/bagadesai4", demo: "#" }
        },
        {
            title: "Health Monitoring App",
            desc: "Mobile-responsive web app to track fitness metrics and schedule medical appointments.",
            tech: ["React Native", "Firebase", "Auth0"],
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
            links: { github: "https://github.com/bagadesai4", demo: "#" }
        },
        {
            title: "Analytics Dashboard",
            desc: "Data visualization platform for monitoring business metrics and financial data.",
            tech: ["React", "D3.js", "Express", "AWS"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            links: { github: "https://github.com/bagadesai4", demo: "#" }
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
