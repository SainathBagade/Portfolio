import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const res = await axios.post('/api/contact', formData);
            if (res.data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (err) {
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <section id="contact" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
                            I'm open to full-time opportunities, freelance projects, or just a professional chat. Feel free to reach out via the form or my social handles.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <ContactItem icon={<Mail />} label="Email" value="bagadesai4@gmail.com" link="mailto:bagadesai4@gmail.com" />
                            <ContactItem icon={<Linkedin />} label="LinkedIn" value="Sainath Bagade" link="https://www.linkedin.com/in/sainath-bagade-892745330" />
                            <ContactItem icon={<Github />} label="GitHub" value="SainathBagade" link="https://github.com/SainathBagade" />
                            <ContactItem icon={<Phone />} label="Phone" value="+91 7887887117" link="tel:+917887887117" />
                            <ContactItem icon={<MapPin />} label="Location" value="Pune, India" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="card"
                        style={{ padding: '40px' }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: '1px solid var(--border)',
                                        borderRadius: '6px',
                                        background: '#F9FAFB',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    className="input-field"
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Your Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: '1px solid var(--border)',
                                        borderRadius: '6px',
                                        background: '#F9FAFB',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    className="input-field"
                                />
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: '1px solid var(--border)',
                                        borderRadius: '6px',
                                        background: '#F9FAFB',
                                        outline: 'none',
                                        resize: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    className="input-field"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', gap: '10px' }}
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                            {status && <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '20px', color: status.includes('success') ? '#10B981' : '#EF4444' }}>{status}</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
            <style>{`
                .input-field:focus {
                    border-color: var(--primary) !important;
                    background: white !important;
                    box-shadow: 0 0 0 4px rgba(10, 102, 194, 0.1);
                }
            `}</style>
        </section>
    );
};

const ContactItem = ({ icon, label, value, link }) => (
    <motion.div
        whileHover={{ x: 5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
    >
        <div style={{ color: 'var(--primary)', padding: '10px', background: 'rgba(10, 102, 194, 0.05)', borderRadius: '8px' }}>
            {icon}
        </div>
        <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{label}</p>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ margin: 0, fontWeight: 500, color: 'inherit', textDecoration: 'none' }} className="link-hover">
                    {value}
                </a>
            ) : (
                <p style={{ margin: 0, fontWeight: 500 }}>{value}</p>
            )}
        </div>
    </motion.div>
);

export default Contact;
