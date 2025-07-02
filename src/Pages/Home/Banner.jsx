import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleBg from "../../Particles/ParticleBg";
import Bottomline from "../../Components/BottomLine/Bottomline";
import { FaArrowRight } from "react-icons/fa";
// import vid from "../../assets/88425-607855984.mp4";
import vid from "../../assets/banner.mp4";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Star Particles Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleBg />
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-30 flex flex-col items-center text-center mx-auto max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Logo or Icon (optional) */}
        {/* <img src="/logo.svg" alt="Ananta Logo" className="w-16 h-16 mb-6 mx-auto" /> */}

        {/* Headline */}
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          <span className="">Welcome To </span>
          <span className="text-[#6d32eb]">Ananta Technology</span>
        </h1>

        {/* Animated Bottom Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto w-24 mt-4"
        >
          <Bottomline />
        </motion.div>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed">
          Empowering your business with <span className="font-bold text-white">cutting-edge digital solutions</span> that drive growth and innovation.
        </p>

        {/* Key Points / Microcopy */}
        <ul className="mt-6 mb-10 flex flex-col sm:flex-row gap-4 justify-center text-base text-gray-300 font-medium">
          <li className="flex items-center gap-2 text-gray-100">
            <span className="w-2 h-2 rounded-full bg-[#5513e5] animate-pulse"></span>
            Web & Mobile Development
          </li>
          <li className="flex items-center gap-2 text-gray-100">
            <span className="w-2 h-2 rounded-full bg-[#d5390e] animate-pulse"></span>
            SEO and SMO Solutions
          </li>
          <li className="flex items-center gap-2 text-gray-50">
            <span className="w-2 h-2 rounded-full bg-[#f4ce10] animate-pulse"></span>
            UI and UX Design
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-lg"
            onClick={() => navigate("/contact-page")}
          >
            Get Started <FaArrowRight className="ml-1" />
          </button>
          <button
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            onClick={() => navigate("/learn-more")}
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
