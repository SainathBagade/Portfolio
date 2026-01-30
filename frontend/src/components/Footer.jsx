import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

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
                    alignItems: 'flex-start',
                    gap: '40px',
                    paddingBottom: '40px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px' }}>
                            Sainath Bagade
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '300px' }}>
                            Thank you for visiting my portfolio. Let's build something amazing together!
                        </p>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px' }}>
                            Privacy
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '300px', fontSize: '0.9rem' }}>
                            Your privacy is important. Any information shared through the contact form is used solely for communication purposes and is never shared with third parties.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <a href="https://www.linkedin.com/in/sainath-bagade-892745330" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}><Linkedin size={24} /></a>
                        <a href="https://github.com/SainathBagade" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}><Github size={24} /></a>
                        <a href="mailto:bagadesai4@gmail.com" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}><Mail size={24} /></a>
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
                        <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
