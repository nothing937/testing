import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp, Play, Star, CheckCircle } from 'lucide-react';

export default function Home() {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Experience blazing performance that keeps your audience engaged and coming back for more.'
        },
        {
            icon: Target,
            title: 'Precision Targeting',
            description: 'Reach exactly who you need with intelligent algorithms and data-driven insights.'
        },
        {
            icon: TrendingUp,
            title: 'Proven Results',
            description: 'Join thousands of satisfied clients who have achieved remarkable growth with our solutions.'
        }
    ];

    const stats = [
        { value: '500K+', label: 'Active Users' },
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '50M+', label: 'Views Generated' },
        { value: '24/7', label: 'Support' }
    ];

    const benefits = [
        'Industry-leading performance and reliability',
        'Advanced analytics and reporting',
        'Seamless integration with your workflow',
        'Dedicated support team',
        'Scalable solutions for any size business',
        'Cutting-edge technology stack'
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 mb-8">
                            <div className="w-2 h-2 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                                Transform Your Vision
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-indigo-900 via-violet-700 to-cyan-600 bg-clip-text text-transparent">
                                Elevate Your
                            </span>
                            <br />
                            <span className="text-slate-900">Brand Experience</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Unlock unlimited potential with cutting-edge solutions designed 
                            to captivate, engage, and convert your audience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to={createPageUrl('Contact')}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-900 to-violet-700 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Now
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <Link
                                to={createPageUrl('Videos')}
                                className="group px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-violet-300 hover:shadow-lg flex items-center gap-2"
                            >
                                <Play className="group-hover:scale-110 transition-transform" size={20} />
                                Watch Videos
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-900 to-violet-700 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-900 to-violet-700 bg-clip-text text-transparent">
                            Why Choose Us
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We combine innovation, expertise, and dedication to deliver exceptional results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 border border-slate-100 hover:border-violet-200"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="text-white" size={28} />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold mb-8">
                                Everything You Need to Succeed
                            </h2>
                            <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                                Our comprehensive platform provides all the tools and support 
                                necessary to achieve your goals and exceed expectations.
                            </p>
                            <Link
                                to={createPageUrl('Contact')}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Start Your Journey
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                                >
                                    <CheckCircle className="text-cyan-400 flex-shrink-0" size={24} />
                                    <span className="text-lg">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-violet-50 to-cyan-50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl" />
                        
                        <div className="relative">
                            <div className="flex justify-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
                                ))}
                            </div>
                            
                            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">
                                "This platform transformed our business completely. The results 
                                exceeded our wildest expectations and the support team is phenomenal."
                            </blockquote>
                            
                            <div>
                                <div className="font-bold text-lg text-slate-900">Sarah Johnson</div>
                                <div className="text-slate-600">CEO, Tech Innovations Inc.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-indigo-900 to-violet-700 bg-clip-text text-transparent">
                                Ready to Get Started?
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            Join thousands of satisfied clients and experience the difference today
                        </p>
                        <Link
                            to={createPageUrl('Contact')}
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-indigo-900 to-violet-700 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
                        >
                            Contact Us Now
                            <ArrowRight size={22} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}