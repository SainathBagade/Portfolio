import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '60px 0 30px',
            background: '#111827',
            color: 'white'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '40px',
                    paddingBottom: '40px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px' }}>
                            Sainath Bagade
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '300px' }}>
                            Thank you for visiting my portfolio. Let's build something amazing together!
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="https://www.linkedin.com/in/sainath-bagade-892745330" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}><Linkedin size={24} /></a>
                        <a href="https://github.com/SainathBagade" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}><Github size={24} /></a>
                        <a href="mailto:bagadesai4@gmail.com" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}><Mail size={24} /></a>
                    </div>
                </div>

                <div style={{
                    marginTop: '30px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '20px',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.5)'
                }}>
                    <p>&copy; {new Date().getFullYear()} Sainath. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
