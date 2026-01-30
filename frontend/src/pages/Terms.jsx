import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '30px', paddingBottom: '0' }}>Terms & Conditions</h1>

                    <div className="card" style={{ padding: '30px', lineHeight: '1.6' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>1. Acceptance of Terms</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>2. Use License</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    All content on this website, including but not limited to code, designs, and text, is the intellectual property of Sainath Bagade unless otherwise stated. You may view the content for informational purposes, but you may not redistribute or claim it as your own without explicit permission.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>3. Disclaimer</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    Materials on this website are provided "as is". I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>4. Limitations</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    In no event shall Sainath Bagade be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>5. Revisions</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    I may revise these terms of service for the website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '600' }}>6. Governing Law</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default Terms;
