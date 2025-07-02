import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaEdit,
  FaWordpress,
  FaFileAlt,
  FaDatabase,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";


const Cms = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Content & Management System | Ananta Technology"
        description="Custom CMS solutions with headless integration, workflow automation, multilingual support, and performance tuning—streamline your content creation, management, and delivery at scale."
        keywords="CMS development, headless CMS, workflow automation, content strategy, multilingual CMS, performance optimization"
        url="https://www.anantatechnology.com/services/content-management"
       
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
              <FaCogs className="text-6xl mb-4 text-green-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-pink-600">Content</span> &amp;{" "}
              <span className="text-green-600">Management</span> System
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Streamline your content workflow with our robust, scalable CMS
              solutions.
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
              About Our CMS Solutions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Our CMS solutions are designed to empower businesses with
              efficient content creation, management, and delivery. We tailor
              platforms to fit your unique needs—ensuring an intuitive user
              interface, seamless integration, and robust performance that
              scales as your business grows.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our CMS Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaEdit />,
                  title: "Custom CMS Development",
                  desc: "Build a tailored CMS platform that fits your workflow, empowering your team with intuitive tools for content management.",
                },
                {
                  icon: <FaWordpress />,
                  title: "Headless CMS Integration",
                  desc: "Adopt headless CMS architecture for a flexible, API‑driven approach that seamlessly delivers content across platforms.",
                },
                {
                  icon: <FaFileAlt />,
                  title: "Content Strategy",
                  desc: "Develop targeted content strategies to maximize engagement and streamline your digital storytelling.",
                },
                {
                  icon: <FaDatabase />,
                  title: "Workflow Automation",
                  desc: "Optimize your operations with automated workflows that reduce manual tasks and speed up the publishing process.",
                },
                {
                  icon: <FaCogs />,
                  title: "Multilingual Support",
                  desc: "Expand your reach with multilingual CMS solutions, enabling you to connect with diverse audiences worldwide.",
                },
                {
                  icon: <FaDatabase />,
                  title: "Performance Optimization",
                  desc: "Ensure your CMS platform runs smoothly with performance optimization techniques, delivering a seamless user experience.",
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
                    <h3 className="text-xl font-semibold text-white">
                      {title}
                    </h3>
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
              Our Implementation Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  step: "1. Discovery & Planning",
                  desc: "We assess your content needs, business goals, and technical environment to devise a bespoke CMS strategy.",
                },
                {
                  step: "2. Design & Development",
                  desc: "Our team designs an intuitive interface and develops a robust CMS solution that scales with your business.",
                },
                {
                  step: "3. Integration & Training",
                  desc: "We integrate your CMS with existing tools and provide comprehensive training to ensure a seamless transition.",
                },
                {
                  step: "4. Launch & Ongoing Support",
                  desc: "After deployment, we provide continuous support and optimization to keep your system secure and efficient.",
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

        {/* Success Stories Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Website Revamp",
                  desc: "Redesigned and implemented a custom CMS to enhance content delivery and brand consistency.",
                },
                {
                  title: "E‑commerce Portal Optimization",
                  desc: "Integrated advanced CMS features to streamline product management and improve UX.",
                },
                {
                  title: "Resource & Blog Hub",
                  desc: "Developed a scalable CMS that supports high‑volume publishing and seamless content updates.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {title}
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
              Ready to Transform Your Content Management?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today to discover how our CMS solutions can streamline
              your workflow and boost engagement.
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

export default Cms;
