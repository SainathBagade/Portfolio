import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '120px 20px 60px', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '850px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '30px', paddingBottom: '0' }}>Privacy Policy</h1>

                    <div className="card" style={{ padding: '30px', lineHeight: '1.6' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>1. Introduction</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    Welcome to Sainath Bagade's Portfolio. I value your privacy and am committed to protecting any personal information you may share with me. This Privacy Policy outlines how I handle data when you visit my website.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>2. Information Collection</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    My portfolio is primarily a showcase of my work. I do not collect personal information unless you voluntarily provide it through the contact form (e.g., your name, email address, and message).
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>3. Use of Information</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    Any information you provide via the contact form is used solely to respond to your inquiries or project proposals and communicate with you regarding potential collaborations.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>4. Data Security</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    I take reasonable measures to protect the information you share. However, please be aware that no method of transmission over the internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>5. Third-Party Links</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    My portfolio contains links to external sites (GitHub, LinkedIn, etc.). I am not responsible for the privacy practices or content of these third-party websites.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>6. Contact Me</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    If you have any questions about this Privacy Policy, please contact me at: <strong>bagadesai4@gmail.com</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style>{`.section-title::after { display: none; }`}</style>
        </div>
    );
};

export default PrivacyPolicy;
