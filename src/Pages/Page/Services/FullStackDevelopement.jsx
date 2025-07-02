// FullStackDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedis,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";

const FullStackDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
<SEO
        title="Full Stack Development | Ananta Technology"
        description="End-to-end full-stack development (MERN + TypeScript, Redis, Tailwind CSS, SCSS)—build scalable, high-performance web applications with React front-ends and Node.js/Express back-ends."
        keywords="full-stack development, MERN stack, React, Node.js, Express, MongoDB, TypeScript, Redis, Tailwind CSS, SCSS"
        url="https://www.anantatechnology.com/services/full-stack-development"
      />
   
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20">
        <div className="container mx-auto px-4 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaLaptopCode className="text-6xl mb-4 text-green-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pink-600">Full</span>{" "}
            <span className="text-green-600">Stack</span> Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Cutting‑edge{" "}
            <span className="text-pink-600">MERN</span> solutions with{" "}
            <span className="text-green-600">TypeScript</span>,{" "}
            <span className="text-pink-600">Redis</span>,{" "}
            <span className="text-green-600">Tailwind CSS</span>,{" "}
            <span className="text-pink-600">SCSS</span> and more.
          </p>
          <button
            onClick={() => navigate("/contact-page")}
            className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Our Full Stack Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Our expertise spans entire tech stacks—from robust backends with
            Node.js & Express, dynamic front‑ends in React, to advanced features
            in TypeScript, Redis caching, Tailwind CSS, and SCSS. We build
            scalable, secure, high‑performance apps that drive growth and delight users.
          </p>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaReact />, label: "React" },
              { icon: <FaNodeJs />, label: "Node.js" },
              { icon: <SiExpress />, label: "Express" },
              { icon: <SiMongodb />, label: "MongoDB" },
              { icon: <SiTypescript />, label: "TypeScript" },
              { icon: <SiRedis />, label: "Redis" },
              { icon: <SiTailwindcss />, label: "Tailwind CSS" },
              { icon: <FaSass />, label: "SCSS" },
              { icon: <SiJavascript />, label: "JavaScript" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                {React.cloneElement(icon, {
                  className: "text-5xl text-green-600",
                })}
                <span className="mt-2 text-lg font-medium text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Full Stack Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Web Applications",
                desc:
                  "Scalable, maintainable web solutions tailored to your needs using MERN and modern best practices.",
              },
              {
                title: "Responsive UI/UX Design",
                desc:
                  "Intuitive, responsive designs ensuring seamless experiences across desktop, tablet, and mobile.",
              },
              {
                title: "API & Microservices",
                desc:
                  "Robust APIs and modular microservices architecture for scalability and maintainability.",
              },
              {
                title: "Performance Optimization",
                desc:
                  "Advanced Redis caching, optimized queries, and code improvements to maximize speed.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
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
              {
                step: "1. Requirement Analysis",
                desc:
                  "We collaborate to define scope, requirements, and success metrics.",
              },
              {
                step: "2. Design & Prototyping",
                desc:
                  "Interactive wireframes and prototypes to visualize your vision.",
              },
              {
                step: "3. Development & Testing",
                desc:
                  "Agile development with rigorous testing to ensure quality.",
              },
              {
                step: "4. Deployment & Maintenance",
                desc:
                  "Deploy on scalable infrastructure with ongoing support.",
              },
            ].map(({ step, desc }) => (
              <div key={step}>
                <h3 className="text-xl font-semibold text-gray-200 mb-1">
                  {step}
                </h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                desc:
                  "Full‑featured MERN e‑commerce solution with seamless UX.",
              },
              {
                title: "Real-Time Dashboard",
                desc:
                  "Analytics dashboard with Redis caching and TypeScript for performance.",
              },
              {
                title: "Social Platform",
                desc:
                  "Responsive social network built with React, Node.js & MongoDB.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What industries do you serve?",
                a:
                  "We work across e‑commerce, finance, social platforms, healthcare, and more.",
              },
              {
                q: "Do you offer ongoing maintenance?",
                a:
                  "Yes—continuous support and optimization to keep your app secure and fast.",
              },
              {
                q: "How long does a project take?",
                a:
                  "Typically 3–6 months, depending on scope and complexity.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
              >
                <h3 className="font-semibold text-lg text-white">{q}</h3>
                <p className="text-gray-300 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call‑to‑Action Section */}
      <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to kickstart your full stack development project
            and drive your business forward.
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

export default FullStackDevelopment;
