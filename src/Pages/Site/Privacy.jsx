import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaInfoCircle,
  FaUser,
  FaExchangeAlt,
  FaCookieBite,
  FaLock,
  FaUserShield,
  FaRegNewspaper,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";

const privacySections = [
  {
    icon: FaInfoCircle,
    title: "Introduction",
    desc:
      "Ananta Technology is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our websites, services, and applications.",
  },
  {
    icon: FaUser,
    title: "Information We Collect",
    desc:
      "We collect personal information you provide directly (name, email, payment info) and automatically via cookies, analytics, and usage data.",
  },
  {
    icon: FaShieldAlt,
    title: "How We Use Your Information",
    desc:
      "We use your information to deliver and improve our services, communicate with you, process transactions, provide support, and comply with legal requirements.",
  },
  {
    icon: FaExchangeAlt,
    title: "Sharing of Information",
    desc:
      "We do not sell personal data. We share info with trusted third-party providers (payment processors, analytics, hosting) who help operate our business.",
  },
  {
    icon: FaCookieBite,
    title: "Cookies & Tracking",
    desc:
      "We use cookies and similar Technology to enhance your experience, analyze usage, and deliver personalized content. You control cookies via your browser settings.",
  },
  {
    icon: FaLock,
    title: "Data Security",
    desc:
      "We implement industry-standard security measures to protect your data, but no transmission or storage method is 100% secure.",
  },
  {
    icon: FaUserShield,
    title: "Your Rights",
    desc:
      "You may request access to, correction of, or deletion of your personal data at any time. You may have additional rights under applicable data protection laws.",
  },
  {
    icon: FaRegNewspaper,
    title: "Changes to This Policy",
    desc:
      "We may update this Privacy Policy periodically. Material changes will be notified via email or a website notice.",
  },
];

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Privacy Policy | Ananta Technology"
        description="Ananta Technology’ Privacy Policy explains what data we collect, how we use and share it, your rights, cookies, security measures, and policy updates."
        keywords="privacy policy, data collection, GDPR, cookies, user rights, Ananta Technology"
        url={`${window.location.origin}/privacy`}
        image={`${window.location.origin}/assets/og-privacy.png`}
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
            <FaShieldAlt className="text-6xl mb-4 text-green-400 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Privacy Policy
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

      {/* Content Sections */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {privacySections.map(({ icon: Icon, title, desc }, idx) => (
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

      {/* Call-to-Action */}
      <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Questions or Concerns?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg"
          >
            Contact our team for any privacy-related inquiries.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => navigate("/contact-page")}
            className="bg-gradient-to-r from-[#915EFF] to-purple-600 py-3 px-8 rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Privacy;
