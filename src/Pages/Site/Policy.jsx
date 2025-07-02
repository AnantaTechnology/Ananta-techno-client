import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaRegClock,
  FaRegTimesCircle,
  FaRegNewspaper,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO";

const policyItems = [
  {
    icon: <FaRegNewspaper />,
    title: "Overview",
    desc: "At Ananta Technology, we value your satisfaction. This policy outlines the terms and conditions related to refunds and cancellations of our services and digital products.",
  },
  {
    icon: <FaRegTimesCircle />,
    title: "Subscription Services",
    desc: "Subscriptions can be canceled at any time; you keep access until the end of your billing period. No refunds for partially used periods.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "One-Time Purchases",
    desc: "All sales of one-time purchases (software, templates, downloads) are final unless otherwise stated at purchase.",
  },
  {
    icon: <FaRegTimesCircle />,
    title: "Cancellation of Projects",
    desc: "Cancellations must be requested in writing. Partial refunds may be issued based on work completed, at our discretion.",
  },
  {
    icon: <FaRegClock />,
    title: "Processing of Refunds",
    desc: "Approved refunds are processed to your original payment method within 5–10 business days; actual timing depends on your bank.",
  },
  {
    icon: <FaEnvelope />,
    title: "Contact Us",
    desc: (
      <>
        For questions or requests, email{" "}
        <Link
          href="mailto: support@anantatechnology.com"
          className="text-blue-400 underline"
        >
          support@anantatechnology.com
        </Link>
        .
      </>
    ),
  },
];

const Policy = () => (
  <>
    <SEO
      title="Refund & Cancellation Policy | Ananta Technology"
      description="Learn about Ananta Technology’ Refund & Cancellation Policy: subscription terms, one-time purchase refunds, project cancellations, and processing timelines."
      keywords="refund policy, cancellation policy, subscription cancellation, Ananta Technology"
      url={`${window.location.origin}/policy`}
      image={`${window.location.origin}/assets/og-refund.png`}
    />

    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-36">
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Refund & Cancellation Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-gray-300"
          >
            Effective Date: March 31, 2025
          </motion.p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {policyItems.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="text-3xl text-green-400 mt-1">{icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-200 leading-relaxed">{desc}</p>
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
            Need Help or Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg"
          >
            Reach out to our team for any refund or cancellation inquiries.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() =>
              (window.location.href =
                "mailto:support@anantatechnology.com")
            }
            className="bg-gradient-to-r from-[#915EFF] to-purple-600 py-3 px-8 rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact Support
          </motion.button>
        </div>
      </section>
    </div>
  </>
);

export default Policy;
