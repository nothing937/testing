import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: 'Home' },
        { name: 'Videos', path: 'Videos' },
        { name: 'Contact', path: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <style>{`
                :root {
                    --primary: #1e1b4b;
                    --secondary: #7c3aed;
                    --accent: #06b6d4;
                }
            `}</style>
            
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center space-x-2 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl p-2.5">
                                    <div className="w-6 h-6 bg-white rounded-md" />
                                </div>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-900 to-violet-700 bg-clip-text text-transparent">
                                Brand
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={createPageUrl(item.path)}
                                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                                        currentPageName === item.path
                                            ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25'
                                            : 'text-slate-700 hover:bg-slate-100 hover:text-indigo-900'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                to={createPageUrl('Contact')}
                                className="relative group px-6 py-3 bg-gradient-to-r from-indigo-900 to-violet-700 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200"
                        >
                            <div className="px-6 py-6 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={createPageUrl(item.path)}
                                        className={`block px-5 py-3 rounded-xl font-medium transition-all ${
                                            currentPageName === item.path
                                                ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
                                                : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    to={createPageUrl('Contact')}
                                    className="block px-5 py-3 bg-gradient-to-r from-indigo-900 to-violet-700 text-white text-center rounded-xl font-semibold"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Page Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white mt-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-xl blur-lg opacity-50" />
                                    <div className="relative bg-gradient-to-r from-violet-500 to-cyan-400 rounded-xl p-2.5">
                                        <div className="w-6 h-6 bg-white rounded-md" />
                                    </div>
                                </div>
                                <span className="text-2xl font-bold">Brand</span>
                            </div>
                            <p className="text-indigo-200 leading-relaxed max-w-md">
                                Elevate your brand with innovative solutions and creative excellence. 
                                We turn visions into reality.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={createPageUrl(item.path)}
                                            className="text-indigo-200 hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Connect</h3>
                            <ul className="space-y-3 text-indigo-200">
                                <li>info@brand.com</li>
                                <li>+1 (555) 123-4567</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
                        <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
