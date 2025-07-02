import React from "react";
import { motion } from "framer-motion";
import {
    FaDesktop,
    FaCogs,
    FaBolt,
    FaChartLine,
    FaLock,
    FaPlug,
    FaRegFileAlt,
    FaWarehouse,
    FaRegChartBar,
    FaRobot,
    FaUsers,
    FaSyncAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";
import JavaImg from "../../../assets/blog/java-logo-1.png";



const ComputerApp = () => {
    const navigate = useNavigate();

    return (
        <>
            <SEO
                title="Desktop Software Development | Ananta Technology"
                description="Tailored desktop software solutions to streamline your business operations and improve productivity using Java."
                keywords="desktop software development, Java applications, business software, custom software"
                url="https://www.anantatechnology.com/services/desktop-software-development"
            />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20">
                    <div className="container mx-auto px-4 text-center py-24">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={JavaImg} alt="Java Logo" className="text-6xl mb-4 w-28 h-28" />

                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-pink-600">Desktop Software</span> Development
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Tailored desktop software solutions to streamline your business operations and improve productivity.
                        </p>
                        <button
                            onClick={() => navigate("/contact-page")}
                            className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
                        >
                            Get Started
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            About Our Desktop Software Services
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            We specialize in crafting robust, high-performance desktop applications using Java. Our solutions are designed to be scalable, secure, and tailored to meet your unique business needs.
                        </p>
                    </div>
                </section>

                {/* Technology Stack Section */}
                <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            Java-Powered Desktop Development
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Leverage the power and versatility of Java to build stable, cross-platform desktop applications with rich features.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 mt-8">
                            {[
                                { icon: <FaDesktop />, label: "Swing & JavaFX", desc: "Rich UI development with Java's leading frameworks." },
                                { icon: <FaCogs />, label: "Custom Business Logic", desc: "Implement complex workflows and automation." },
                                { icon: <FaBolt />, label: "Performance & Stability", desc: "High-speed execution and reliable performance." },
                                { icon: <FaChartLine />, label: "Scalability", desc: "Easily expand functionality as your business grows." },
                                { icon: <FaLock />, label: "Security", desc: "Robust security features to protect your data." },
                                { icon: <FaPlug />, label: "Integration", desc: "Connect seamlessly with existing systems and APIs." },
                            ].map(({ icon, label, desc }) => (
                                <div key={label} className="flex flex-col items-center max-w-xs">
                                    {React.cloneElement(icon, { className: "text-5xl text-green-600 mb-2" })}
                                    <h3 className="text-xl font-semibold mb-2">{label}</h3>
                                    <p className="text-gray-200 text-center">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Our Desktop Solutions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <FaRegFileAlt />, title: "Custom ERP Solutions", desc: "End-to-end enterprise resource planning tailored to your workflows." },
                                { icon: <FaWarehouse />, title: "Inventory Management", desc: "Real-time tracking and management of stock and assets." },
                                { icon: <FaRegChartBar />, title: "Report & Analytics", desc: "Insightful analytics and reporting tools for informed decisions." },
                                { icon: <FaRobot />, title: "Automation Tools", desc: "Automate repetitive tasks to increase efficiency and reduce errors." },
                                { icon: <FaUsers />, title: "CRM Software", desc: "Manage customer relationships and sales pipelines effectively." },
                                { icon: <FaSyncAlt />, title: "Migration & Upgrades", desc: "Seamless system migrations and version upgrades." },
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                                    <div className="flex items-center mb-4">
                                        {React.cloneElement(icon, { className: "text-3xl text-green-600 mr-2" })}
                                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    </div>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            Our Development Process
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-8">
                            {[
                                { step: "1. Consultation & Analysis", desc: "We start by understanding your goals and requirements to craft a tailored strategy." },
                                { step: "2. Design & Prototyping", desc: "Interactive prototypes and wireframes to visualize the final product." },
                                { step: "3. Development & Testing", desc: "Agile development with rigorous testing for quality assurance." },
                                { step: "4. Deployment & Support", desc: "Post-launch maintenance and support to keep your software optimized." },
                            ].map(({ step, desc }) => (
                                <div key={step}>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-200">{step}</h3>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {"Let's"} Transform Your Operations with Java
                        </h2>
                        <p className="text-lg md:text-xl mb-8">
                            Contact us today to discuss your desktop software project and learn how Java-powered solutions can elevate your business.
                        </p>
                        <button
                            onClick={() => navigate("/contact-page")}
                            className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
                        >
                            Contact Us
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ComputerApp;
