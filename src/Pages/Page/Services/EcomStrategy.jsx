// EcomStrategy.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaChartLine,
  FaBullseye,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";

const EcomStrategy = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="E-commerce Strategy Projects | Ananta Technology"
        description="Data-driven e-commerce strategy services—market analysis, conversion optimization, mobile UX, platform integration, and performance analytics—to maximize your online sales and ROI."
        keywords="e-commerce strategy, market analysis, conversion optimization, mobile commerce, platform integration, performance analytics"
        url="https://www.anantatechnology.com/services/ecommerce-strategy"
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
              <FaShoppingCart className="text-6xl mb-4 text-green-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-pink-600">E‑commerce</span> &amp;{" "}
              <span className="text-green-600">Strategy</span> Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforming your online business with data‑driven strategies and
              innovative solutions.
            </p>
            <button
              onClick={() => navigate("/contact-page")}
              className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
            >
              Get a Consultation
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About Our E‑commerce Strategy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We specialize in driving online business growth by leveraging robust
              market research, data analytics, and innovative technology
              integration. Our custom e‑commerce strategies deliver a seamless
              customer experience, boost conversion rates, and optimize your ROI.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our E‑commerce Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaChartLine />,
                  title: "Market Analysis",
                  desc: "In‑depth research on market trends, customer behavior, and competitor insights to position your business effectively.",
                },
                {
                  icon: <FaBullseye />,
                  title: "Targeted Strategy",
                  desc: "Customized approaches designed to capture and convert your target audience through tailored marketing strategies.",
                },
                {
                  icon: <FaCogs />,
                  title: "Technology Integration",
                  desc: "Seamless incorporation of the latest e‑commerce tools, payment systems, and inventory management software.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Optimization",
                  desc: "Enhancing your online store’s mobile experience to engage users across all devices and platforms.",
                },
                {
                  icon: <FaShoppingCart />,
                  title: "Conversion Optimization",
                  desc: "Proven techniques, including A/B testing and UX improvements, to maximize your conversion rates and sales.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Performance Analytics",
                  desc: "Ongoing monitoring and reporting to refine strategies based on real‑time data and customer feedback.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    {React.cloneElement(icon, {
                      className: "text-3xl text-green-600 mr-2",
                    })}
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
              Our Strategic Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  step: "1. Discovery & Research",
                  desc: "We analyze your market, competitors, and customer segments to craft a bespoke strategy that drives engagement.",
                },
                {
                  step: "2. Strategy Development",
                  desc: "Our experts develop an integrated strategy tailored to your business goals, ensuring alignment with your brand identity.",
                },
                {
                  step: "3. Implementation & Integration",
                  desc: "We seamlessly implement your strategy with the latest Technology and best practices for e‑commerce success.",
                },
                {
                  step: "4. Monitoring & Optimization",
                  desc: "Through continuous analysis and feedback, we fine‑tune your strategy to maximize performance and revenue growth.",
                },
              ].map(({ step, desc }) => (
                <div key={step}>
                  <h3 className="text-xl font-semibold mb-1 text-gray-200">
                    {step}
                  </h3>
                  <p className="text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call‑to‑Action Section */}
        <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Online Business?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today to get started on a tailored e‑commerce strategy
              that drives results.
            </p>
            <button
              onClick={() => navigate("/contact-page")}
              className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
            >
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EcomStrategy;
