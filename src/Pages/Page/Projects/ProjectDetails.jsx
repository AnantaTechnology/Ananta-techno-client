import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import project1 from "../../../assets/Projects/project1.png";
import project2 from "../../../assets/Projects/project2.png";
import project3 from "../../../assets/Projects/project3.png";
import project4 from "../../../assets/Projects/project7.png";
import project5 from "../../../assets/Projects/project8.png";
import project6 from "../../../assets/Projects/project9.png";
import SEO from "../../../Components/SEO";

const projectsData = [
  {
    id: 1,
    title: "AgroSpace Solution",
    description:
      "A cutting-edge analytics platform powered by AI models and advanced algorithms, delivering actionable insights with immersive visual storytelling.",
    image: project1,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://my.agrospace.io/",
    details: `
      AgroSpace Solution revolutionizes the way agricultural stakeholders leverage data. 
      By combining AI-driven analytics with intuitive dashboards, users can track real-time 
      metrics, generate predictive insights, and make data-backed decisions to optimize yield 
      and sustainability.
    `,
  },
  {
    id: 2,
    title: "Empowering Marine",
    description:
      "A robust web portal designed to streamline marine and offshore operations, enhancing efficiency and connectivity for industry professionals.",
    image: project2,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://oceanq.eu/",
    details: `
      Developed for the maritime industry, this solution connects port authorities, 
      shipping companies, and other maritime stakeholders in a unified platform. 
      Offering scheduling, vessel tracking, and real-time communication tools,
      it ensures smoother operations across oceans.
    `,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "An elegant e-commerce website offering premium wellness and lifestyle products, combining sleek design with seamless functionality.",
    image: project3,
    tags: [
      "Redis",
      "AWS",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    webapp: "https://quantumasync.onrender.com/",
    details: `
      This e-commerce platform focuses on providing a streamlined shopping experience.
      From seamless product browsing and quick checkout to detailed analytics and 
      inventory management, it’s built for high performance and user satisfaction.
    `,
  },
  {
    id: 4,
    title: "Fem-Cartel E-Commerce",
    description:
      "A feature-rich e-commerce solution providing luxury products for men and women, blending sophisticated design with superior user experience.",
    image: project4,
    tags: [
      "Redis",
      "AWS",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    webapp: "https://fem-cartel.vercel.app/",
    details: `
      Fem-Cartel is tailored to cater to the luxury sector, ensuring brand identity 
      and aesthetics remain top priorities. With advanced filtering, robust payment 
      gateways, and personalized user profiles, it's a go-to platform for upscale retail.
    `,
  },
  {
    id: 5,
    title: "CRM Dashboard",
    description:
      "An intuitive CRM dashboard designed for streamlined customer management, integrating powerful analytics for actionable business insights.",
    image: project5,
    tags: [
      "Redis",
      "AWS",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    webapp: "https://cloud.idurarapp.com/",
    details: `
      This CRM solution helps enterprises track leads, manage sales funnels, and analyze 
      client data in real-time. Equipped with automated email campaigns, robust 
      reporting, and collaborative workflows, it significantly enhances team productivity.
    `,
  },
  {
    id: 6,
    title: "E-Commerce Admin Panel",
    description:
      "A comprehensive admin dashboard for efficient e-commerce management, offering real-time analytics, order tracking, and inventory control.",
    image: project6,
    tags: [
      "Redis",
      "AWS",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    webapp: "https://fem-cartel.vercel.app/admin/dashboard",
    details: `
      Built for store admins, this panel allows them to monitor daily sales, 
      manage stock, and fulfill orders in real-time. The user-friendly interface 
      and detailed reporting features ensure efficient store administration.
    `,
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert ID to a number for matching
  const projectId = parseInt(id, 10);

  // Get project data by ID
  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          className="bg-gradient-to-r from-[#915EFF] to-purple-600 px-6 py-2 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Ananta Technology`}
        description={project.description}
        keywords={project.tags.join(", ")}
        url={`https://www.anantatechnology.com/projects/project-details/${project.id}`}
        image={project.image}
      />

      <div className="min-h-screen bg-gradient-to-r from-[#241533] to-[#0c0120] text-white px-6 sm:px-16 py-44 ">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 bg-opacity-50 hover:bg-opacity-80 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              ← Go Back
            </button>
          </div>

          {/* Image Section */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Detailed Description */}
          <motion.div
            className="bg-slate-900 bg-opacity-60 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="bg-slate-900 bg-opacity-60 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Technology Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full text-sm hover:bg-[#915EFF] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#915EFF] to-purple-600 px-6 py-2 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Visit Live Site
            </a>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 bg-opacity-50 px-6 py-2 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Back to Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
