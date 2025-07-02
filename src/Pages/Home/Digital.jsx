// src/components/DigitalAgencyProcess.jsx
import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

const steps = [
  {
    title: "Discovery",
    description:
      "Our web design process begins with a deep understanding of your project’s scope and requirements through thorough research and data analysis. Our design experts collaborate closely with you to ensure alignment and clarity every step of the way.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/140eec04-eeac-4556-8360-baf5667eabb9.jpg",
    imgAlt:
      "Illustration of two people looking at a computer screen with a dog and a plant",
  },
  {
    title: "Plan",
    description:
      "After the initial project kick-off meeting, we will outline your web design and development project, establish milestones, and set clear priorities. This strategic plan ensures your website design aligns with your vision and supports your digital marketing goals effectively.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/983bda45-15c9-4266-d4b0-39ab123a7b9f.jpg",
    imgAlt:
      "Illustration of two people sitting on a stack of papers with a laptop",
  },
  {
    title: "Execute",
    description:
      "The final website design begins to take shape, bringing your vision to life through carefully crafted visual concepts. Our expert web development team refines and adjusts the digital assets to ensure they meet your technology requirements and align seamlessly with your marketing goals.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/86a44634-3db4-4a03-f913-407836a77059.jpg",
    imgAlt: "Illustration of two people sitting on a large tablet with a dog",
  },
  {
    title: "Deliver",
    description:
      "Thorough review and testing are conducted to ensure the highest quality for your web design project. We prioritize your brand, reputation, and online presence, ensuring everything is accurate and aligned with your goals. Once finalized, we present your completed custom web design for approval, and upon your go-ahead, launch.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/f24a86bd-70db-40a6-5e6b-79c902161c11.jpg",
    imgAlt:
      "Illustration of a person sitting in front of buildings and a stack of money with a palm tree",
  },
];

const DigitalAgencyProcess = () => (
  <>
     
  <main className="relative bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-32 overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative">
      {/* === BACKGROUND SVG CURVE === */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 400"
        preserveAspectRatio="none"
      >
        <path
          d="
            M50,70,  
            C20,60 20,140 50,180 
            S10,500, 10, 330,440
          "
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="2 2"
        />
      </svg>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* === CONTENT === */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          variants={cardVariants}
        >
          Our <span className="text-[#1ea7c9]">Process</span>
        </motion.h2>
        <motion.div variants={cardVariants}>
          <Bottomline />
        </motion.div>
      </motion.div>

      <p className="max-w-3xl mx-auto text-center text-sm text-gray-300 leading-relaxed mb-12 pt-12 relative z-10">
        Partner with the leading Web Design and Digital Marketing Agencies. With
        over 15 years of experience, we’ve perfected our approach to creating
        exceptional web designs and digital experiences that drive success for
        every client.
      </p>

      <div className="space-y-28 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row md:items-center md:space-x-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={step.imgSrc}
              alt={step.imgAlt}
              width={280}
              height={220}
              className="w-full max-w-[280px] mx-auto md:mx-0 rounded-lg shadow-lg"
            />
            <div className="mt-6 md:mt-0 max-w-xl">
              <h2 className="flex items-center text-green-400 font-bold text-lg mb-2">
                <span className="inline-block w-5 h-5 mr-2 rounded-full border-2 border-green-400 flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </span>
                {step.title}
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        {/* Optional extra image */}
        {/* <div className="flex justify-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/c2e511c4-bc60-444c-a478-4d3bccbb4818.jpg"
            alt="Additional process illustration"
            width={280}
            height={220}
            className="w-full max-w-[280px] rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>
  </main>
  </>
);

export default DigitalAgencyProcess;
