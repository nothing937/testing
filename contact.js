import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'info@brand.com',
            link: 'mailto:info@brand.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            content: '123 Business Ave, Suite 100, San Francisco, CA 94103',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                            Let's discuss how we can help elevate your business to new heights
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
                                <h2 className="text-3xl font-bold mb-3 text-slate-900">
                                    Send Us a Message
                                </h2>
                                <p className="text-slate-600 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours
                                </p>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="text-white" size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                            Thank You!
                                        </h3>
                                        <p className="text-slate-600">
                                            We've received your message and will be in touch soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Your Name *
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-12 rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="h-12 rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <Input
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="h-12 rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Company Name
                                            </label>
                                            <Input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                                                placeholder="Your Company Inc."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Your Message *
                                            </label>
                                            <Textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-14 bg-gradient-to-r from-indigo-900 to-violet-700 hover:from-indigo-800 hover:to-violet-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
                                        >
                                            <Send className="mr-2" size={20} />
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                                    Contact Information
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We're here to help and answer any questions you might have. 
                                    We look forward to hearing from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-start gap-6 bg-gradient-to-br from-violet-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-violet-100"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <info.icon className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-slate-600">
                                                {info.content}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">
                                    Office Hours
                                </h3>
                                <div className="space-y-3 text-slate-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                                <div className="text-center text-slate-600">
                                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                                    <p className="font-medium">Map Location</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Prefer to Talk Directly?
                        </h2>
                        <p className="text-xl text-indigo-200 mb-8">
                            Schedule a call with our team to discuss your needs in detail
                        </p>
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}