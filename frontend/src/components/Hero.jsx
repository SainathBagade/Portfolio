import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Phone, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import saiImg from '../assets/sai.jpeg';
import resumePdf from '../assets/Resume.pdf';

const Hero = () => {
    const [showNameCursor, setShowNameCursor] = useState(true);

    return (
        <section id="home" style={{ backgroundColor: '#fff', paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: '3.5rem',
                            lineHeight: 1.2,
                            marginBottom: '16px',
                            fontWeight: '700',
                            color: '#1F2937'
                        }}>
                            <TypeAnimation
                                sequence={[
                                    1000,
                                    "Hi, I'm ",
                                    () => setShowNameCursor(false)
                                ]}
                                wrapper="span"
                                speed={50}
                                cursor={showNameCursor}
                                repeat={0}
                                style={{
                                    color: '#1F2937',
                                    display: 'inline'
                                }}
                            />
                            <a
                                href="#home"
                                style={{
                                    background: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '800',
                                    letterSpacing: '-0.5px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, #004182 0%, #0A66C2 100%)';
                                    e.target.style.WebkitBackgroundClip = 'text';
                                    e.target.style.backgroundClip = 'text';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)';
                                    e.target.style.WebkitBackgroundClip = 'text';
                                    e.target.style.backgroundClip = 'text';
                                }}
                            >
                                Sainath Bagade
                            </a>
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '24px', minHeight: '1.5em' }}>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Web Developer',
                                    2000,
                                    'Analytical Problem Solver',
                                    2000,
                                    'Cloud Computing Enthusiast',
                                    2000,
                                    'Software Developer',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                                <Phone size={18} /> <span>+91 7887887117</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                                <Mail size={18} /> <span>bagadesai4@gmail.com</span>
                            </div>
                        </div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px' }}>
                            I build robust, scalable, and user-centric web applications. Passionate about turning complex problems into simple, beautiful digital solutions.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                            <LinkToContact />
                            <a href={resumePdf} className="btn btn-outline" target="_blank" download="Sainath_Bagade_Resume.pdf">
                                <FileText size={18} style={{ marginRight: '8px' }} /> Download Resume
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', color: 'var(--text-muted)' }}>
                            <motion.a
                                whileHover={{ scale: 1.2, color: 'var(--primary)' }}
                                href="https://www.linkedin.com/in/sainath-bagade-892745330" target="_blank" rel="noopener noreferrer"
                                style={{ color: 'inherit', transition: 'all 0.3s' }}
                            >
                                <Linkedin size={28} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, color: '#333' }}
                                href="https://github.com/SainathBagade" target="_blank" rel="noopener noreferrer"
                                style={{ color: 'inherit', transition: 'all 0.3s' }}
                            >
                                <Github size={28} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                position: 'relative',
                                width: '320px',
                                height: '320px',
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-20px',
                                width: '100%',
                                height: '100%',
                                border: '4px solid var(--primary)',
                                borderRadius: '12px',
                                zIndex: 0
                            }}></div>
                            <img
                                src={saiImg}
                                alt="Sainath Bagade"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: 'var(--shadow-lg)'
                                }}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/320x320?text=Sainath";
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const LinkToContact = () => (
    <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        Hire Me <ArrowRight size={18} />
    </a>
)

export default Hero;
