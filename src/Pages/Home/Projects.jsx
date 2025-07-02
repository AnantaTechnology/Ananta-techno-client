// src/Pages/ProjectsPage/Projects.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project6 from "../../assets/Projects/project3.png";
import project4 from "../../assets/Projects/project7.png";
import project5 from "../../assets/Projects/project8.png";
import project10 from "../../assets/Projects/project10.png";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const projects = [
  {
    id: 1,
    title: "AgroSpace Solution",
    description: "AI‑powered ag‑analytics dashboard.",
    image: project1,
    link: "https://my.agrospace.io/",
    tags: ["React.js","Express.js", "Node.js","MongoDB", "AWS"],
  },
  {
    id: 2,
    title: "Empowering Marine",
    description: "Maritime operations portal.",
    image: project2,
    link: "https://oceanq.eu/",
    tags: ["React.js","Express.js", "Node.js","MongoDB"],
  },
  {
    id: 3,
    title: "BloodBuck Ecommerce",
    description: "High‑perf online store.",
    image: project10,
    // link: "https://quantumasync.onrender.com/",
    tags: ["React.js","Express.js", "Node.js","MongoDB"],
  },
  {
    id: 4,
    title: "Fem‑Cartel E‑Commerce",
    description: "Luxury retail experience.",
    image: project4,
    link: "https://fem-cartel.vercel.app/",
    tags: ["React.js","Express.js", "Node.js","MongoDB"],
  },
  {
    id: 5,
    title: "CRM Dashboard",
    description: "User‑centric CRM suite.",
    image: project5,
    link: "https://cloud.idurarapp.com/",
    tags: ["React.js","Express.js", "Node.js","MongoDB"],
  },
  {
    id: 6,
    title: "Dapper Daddy",
    description: "E‑commerce Store.",
    image: project6,
    link: "https://quantumasync.onrender.com/",
    tags: ["React.js","Express.js", "Node.js","MongoDB"],
  },
];

export default function Projects() {
  const canvasRef = useRef(null);

  // Blob background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const BLOB_COUNT = 10;
    let blobs = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      blobs = Array.from({ length: BLOB_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 80 + Math.random() * 60,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      blobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        b.phase += 0.008;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const grad = ctx.createRadialGradient(
          b.x,
          b.y,
          b.r * 0.3 + Math.sin(b.phase) * 8,
          b.x,
          b.y,
          b.r
        );
        grad.addColorStop(0, "rgba(30,167,201,0.4)");
        grad.addColorStop(1, "rgba(30,167,201,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
    
    <section className="relative bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-32 overflow-hidden">
      {/* Blob background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Header */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          variants={cardVariants}
        >
          Our <span className="text-[#1ea7c9]">Projects</span>
        </motion.h2>
        <motion.div variants={cardVariants}>
          <Bottomline />
        </motion.div>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          Explore our showcase: each card highlights the tools we used and links
          to live demos or detailed write‑ups.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6 sm:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className="group bg-slate-900 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            variants={cardVariants}
          >
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-200 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-[#915EFF] to-purple-600 px-4 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90 transition"
                >
                  <FiArrowRight /> Live
                </a>
                <Link
                  to={`/projects/project-details/${p.id}`}
                  className="inline-flex items-center gap-1 border border-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </>
  );
}
