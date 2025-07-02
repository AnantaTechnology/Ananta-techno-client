import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookOpen, FaLightbulb, FaLaptop, FaChartBar } from "react-icons/fa";

const Learn = () => {
    return (
        <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white py-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <FaBookOpen className="text-6xl mb-4" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Learn More About Ananta Technology
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Discover the innovative strategies, advanced Technology, and creative solutions that drive our success.
                    </p>
                </div>
            </section>

            {/* Our Story & Mission */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our Story & Mission
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        At Ananta Technology, our journey began with a passion for digital innovation and a commitment to empowering businesses. Our mission is to deliver transformative digital solutions that drive growth and create lasting value. We blend creativity, data-driven insights, and the latest technology trends to help our clients succeed in an ever-evolving market.
                    </p>
                </div>
            </section>

            {/* Our Approach */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white  py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Approach
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <FaLightbulb className="text-4xl text-yellow-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Innovation & Creativity</h3>
                                <p className="text-gray-400">
                                    We combine creative design with advanced Technology to develop unique digital experiences.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaChartBar className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                                <p className="text-gray-400">
                                    Our strategies are built on thorough market research and data analytics, ensuring that every decision is backed by solid insights.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaLaptop className="text-4xl text-green-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                                <p className="text-gray-400">
                                    We leverage modern tools and platforms to build scalable, secure, and high-performance solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaBookOpen className="text-4xl text-purple-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                                <p className="text-gray-400">
                                    We’re constantly evolving, staying ahead of industry trends and continuously improving our craft.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights & Resources */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white  py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Insights & Resources
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
                        Explore our latest articles, case studies, and in-depth resources that share our knowledge and experience in digital transformation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Resource Card 1 */}
                        <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold mb-2">Digital Transformation Trends</h3>
                            <p className="text-gray-300">
                                Stay updated on the emerging trends in digital transformation and how they can reshape your business.
                            </p>
                            {/* <a href="/blog/digital-transformation" className="text-indigo-400 font-semibold mt-4 inline-block">
                                Read More
                            </a> */}
                        </div>
                        {/* Resource Card 2 */}
                        <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold mb-2">Leveraging Data for Growth</h3>
                            <p className="text-gray-400">
                                Discover how data analytics can empower your business and drive strategic decision-making.
                            </p>
                            {/* <a href="/blog/data-for-growth" className="text-indigo-600 font-semibold mt-4 inline-block">
                                Read More
                            </a> */}
                        </div>
                        {/* Resource Card 3 */}
                        <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold mb-2">Innovative Web Solutions</h3>
                            <p className="text-gray-400">
                                Learn about our creative web design and development processes that deliver exceptional user experiences.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r  from-[#38B6FF] to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Digital Strategy?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Join us on a journey of innovation and growth. Get in touch today to discover how Ananta Technology can empower your business.
                    </p>
                    <Link className=" bg-purple-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Learn;
