
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaUserCheck,
  FaUserShield,
  FaLightbulb,
  FaExclamationTriangle,
  FaGavel,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";

const termsSections = [
  {
    icon: FaFileContract,
    title: "Overview",
    desc:
      "Welcome to Ananta Technology. By accessing our IT solutions and SaaS products, you agree to these Terms of Use governing your usage of our websites, applications, software, and services.",
  },
  {
    icon: FaUserCheck,
    title: "Eligibility",
    desc:
      "You must be 18 years or the age of majority in your jurisdiction. By using our services, you represent that you meet these requirements.",
  },
  {
    icon: FaUserShield,
    title: "User Responsibilities",
    desc:
      "You are responsible for all activity under your account and agree not to misuse our services, upload malicious content, or engage in illegal activities.",
  },
  {
    icon: FaLightbulb,
    title: "Intellectual Property",
    desc:
      "All content and trademarks on our platform are owned by Ananta Technology or its licensors. You may not copy, modify, distribute, or exploit any part without our written consent.",
  },
  {
    icon: FaExclamationTriangle,
    title: "Termination",
    desc:
      "We may suspend or terminate your access at any time, with or without notice, for conduct that violates these terms or harms our business or users.",
  },
  {
    icon: FaGavel,
    title: "Disclaimers & Liability",
    desc:
      "Our services are provided “as is” without warranties. To the fullest extent permitted by law, we are not liable for any indirect or consequential damages arising from your use.",
  },
  {
    icon: FaGavel,
    title: "Governing Law",
    desc:
      "These terms are governed by the laws of the State of Delhi, without regard to conflict of law principles.",
  },
  {
    icon: FaEnvelope,
    title: "Contact Us",
    desc: (
      <>
        Questions? Email us at{" "}
        <a
          href="mailto: support@anantatechnology.com"
          className="text-blue-400 underline"
        >
          support@anantatechnology.com
        </a>
        .
      </>
    ),
  },
];

const Terms = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Terms of Use | Ananta Technology"
        description="Read the Ananta Technology Terms of Use: eligibility, user responsibilities, IP rights, termination, disclaimers, and governing law."
        keywords="terms of use, user agreement, Ananta Technology, intellectual property, liability"
        url={`${window.location.origin}/terms-of-use`}
      />
    
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-36">
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaFileContract className="text-6xl mb-4 text-green-400 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-gray-300"
          >
            Effective Date: March 31, 2025
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {termsSections.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start space-x-4"
            >
              <Icon className="text-3xl text-green-400 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="leading-relaxed text-gray-200">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Need Assistance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg"
          >
            Reach out for any questions regarding our Terms of Use.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => navigate("/contact-page")}
            className="bg-gradient-to-r from-[#915EFF] to-purple-600 py-3 px-8 rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact Support
          </motion.button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Terms;
