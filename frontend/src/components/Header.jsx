import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header className="nav" style={{
            boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
            padding: scrolled ? '10px 0' : '20px 0',
            transition: 'all 0.3s ease'
        }}>
            <nav className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <img src={logo} alt="Sainath.dev Logo" style={{ height: '40px', objectFit: 'contain' }} />
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <ul style={{
                    display: 'flex',
                    gap: '30px',
                    listStyle: 'none',
                    alignItems: 'center'
                }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                style={{
                                    color: 'var(--text-main)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div style={{ display: 'none', cursor: 'pointer' }} className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                background: 'white',
                                padding: '20px',
                                borderBottom: '1px solid var(--border)',
                                overflow: 'hidden'
                            }}
                        >
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                            onClick={() => setIsOpen(false)}
                                            style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, display: 'block' }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <style>{`
                @media (max-width: 992px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-icon { display: block !important; }
                }
            `}</style>
        </header >
    );
};

export default Header;
