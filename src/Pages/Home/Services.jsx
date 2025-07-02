import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Bottomline from "../../Components/BottomLine/Bottomline";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";

// Service‑specific icons
import {
  FaDraftingCompass,
  FaMobileAlt,
  FaShoppingCart,
  FaShareAlt,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

/* Icon picker */
// const renderServiceIcon = (title) => {
//   const lower = title.toLowerCase();
//   if (lower.includes("ui") && lower.includes("ux"))
//     return <FaDraftingCompass className="inline-block text-xl text-pink-500" />;

//   if (lower.includes("no-code"))
//     return <FaMobileAlt className="inline-block text-xl text-blue-500" />;

//   if (lower.includes("e-commerce"))
//     return <FaShoppingCart className="inline-block text-xl text-green-500" />;

//   if (lower.includes("social media"))
//     return <FaShareAlt className="inline-block text-xl text-purple-500" />;

//   if (lower.includes("content management"))
//     return <FaCogs className="inline-block text-xl text-yellow-500" />;

//   if (lower.includes("full stack"))
//     return <FaLaptopCode className="inline-block text-xl text-indigo-500" />;
//   return null;
// };

export const services = [
  {
    title: "UI & UX Design",
    desc: "Intuitive UI/UX design that delights users and drives engagement.",
    link: "/services/ui-ux-design",
  },
  {
    title: "No-Code App Development",
    desc: "Launch mobile and web apps rapidly without traditional coding—ideal for startups and entrepreneurs.",
    link: "/services/no-code-app-web-development",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end development services covering front-end, back-end, and everything in between.",
    link: "/services/full-stack-development",
  },
  {
    title: "Computer Application Development",
    desc: "Tailored desktop software solutions to streamline your business operations and improve productivity.",
    link: "/services/computer-application-development",
  },
  {
    title: "E-commerce Strategy Projects",
    desc: "Strategic planning and execution for online stores that convert and scale.",
    link: "/services/ecommerce-strategy",
  },
  {
    title: "Content Management Systems",
    desc: "Robust CMS solutions for easy content publishing and management.",
    link: "/services/content-management",
  },

];


const renderServiceIcon = (title) => {
  const lower = title.toLowerCase();

  if (lower.includes("ui") || lower.includes("ux"))
    return <FaDraftingCompass className="inline-block text-xl text-pink-500" />;
  if (lower.includes("no-code"))
    return <FaMobileAlt className="inline-block text-xl text-blue-500" />;
  if (lower.includes("mobile"))
    return <FaMobileAlt className="inline-block text-xl text-teal-500" />;
  if (lower.includes("full stack"))
    return <FaLaptopCode className="inline-block text-xl text-indigo-500" />;
  if (lower.includes("computer application"))
    return <FaCogs className="inline-block text-xl text-orange-500" />;
  if (lower.includes("e-commerce"))
    return <FaShoppingCart className="inline-block text-xl text-green-500" />;
  if (lower.includes("social media"))
    return <FaShareAlt className="inline-block text-xl text-purple-500" />;
  if (lower.includes("content management"))
    return <FaCogs className="inline-block text-xl text-yellow-500" />;

  return <FaCogs className="inline-block text-xl text-white" />; // fallback icon
};


const Services = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    // const margin = 20;
    const squares = [];
    const num = 40;

    const initSquares = () => {
      squares.length = 0;
      for (let i = 0; i < num; i++) {
        const size = Math.random() * 50 + 20;
        squares.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          // slower vertical speed
          speed: Math.random() * 0.2 + 0.05,
          // horizontal drift slower
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initSquares();
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      squares.forEach((sq) => {
        // slower vertical movement
        sq.y -= sq.speed;
        // slower angle increment and horizontal drift
        sq.angle += 0.002;
        sq.x += Math.cos(sq.angle) * 0.2;
        if (sq.y + sq.size < 0) sq.y = canvas.height + sq.size;
        if (sq.x > canvas.width + sq.size) sq.x = -sq.size;
        if (sq.x < -sq.size) sq.x = canvas.width + sq.size;

        ctx.save();
        ctx.translate(sq.x, sq.y);
        ctx.rotate(sq.angle);
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.fillRect(-sq.size / 2, -sq.size / 2, sq.size, sq.size);
        ctx.restore();
      });
      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <section
        id="services"
        className="relative z-10 bg-gradient-to-r to-[#640e9e] from-[#0f6ca5] py-20 px-6 sm:px-16 text-white overflow-hidden"
      >
        {/* Canvas Background with animated rotating squares (slowed) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Page Content */}
        <motion.div
          className="relative z-20 max-w-7xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-[#1ea7c9]">Services</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-40"
          >
            <Bottomline />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            At Ananta Technology, we offer a comprehensive range of IT services
            designed to accelerate your business growth, enhance operational
            efficiency, and deliver outstanding user experiences.
          </motion.p>


          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
            variants={containerVariants}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-[1.2rem] font-semibold mb-4 flex items-center gap-2">
                  {renderServiceIcon(s.title)} <span>{s.title}</span>
                </h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
                <Link
                  to={s.link}
                  className="flex items-center gap-1 mt-4 cursor-pointer hover:text-[#5e74ff] transition-colors"
                >
                  <span className="text-sm font-medium text-[#915EFF]">
                    Read More
                  </span>
                  <FiArrowRight className="text-xl text-[#915EFF]" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center  bg-slate-900 bg-opacity-70 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Need a Custom Solution? Let’s Create Something Exceptional
              Together.
            </h3>
            <motion.button
              onClick={() => navigate("/contact-page")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
