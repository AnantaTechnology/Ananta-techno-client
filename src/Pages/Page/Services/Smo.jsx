// Smo.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";
import { FaXTwitter } from "react-icons/fa6";

const Smo = () => {
  const navigate = useNavigate();

  return (
    <>
    <SEO
        title="Social Media Campaigns | Ananta Technology"
        description="Creative, data-driven social media campaigns across Facebook, Instagram, LinkedIn, and Twitter—boost brand awareness, engagement, and ROI with targeted ads and content."
        keywords="social media marketing, SMO, Facebook ads, Instagram ads, LinkedIn marketing, Twitter campaigns, brand engagement"
        url="https://www.anantatechnology.com/services/social-media-campaigns"
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
              <FaBullhorn className="text-6xl mb-4 text-green-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-pink-600">Social Media</span> &amp;{" "}
              <span className="text-green-600">Campaigns</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Amplify your brand’s voice with creative and data‑driven social
              media strategies.
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
              Why Choose Our Campaigns?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Our strategic social media campaigns are designed to engage your
              audience, boost brand awareness, and drive conversions. By
              leveraging the latest trends, precise audience targeting, and
              creative content, we help you build a lasting online presence that
              converts followers into customers.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Social Media Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaFacebookF />,
                  title: "Facebook & Instagram",
                  desc: "Engage your audience with targeted campaigns on Facebook and Instagram that maximize reach and drive engagement.",
                  color: "text-green-600",
                },
                {
                  icon: <FaXTwitter />,
                  title: "X Campaigns",
                  desc: "Leverage real‑time conversations and trending topics to boost your brand’s visibility on X.",
                  color: "text-green-600",
                },
                {
                  icon: <FaLinkedinIn />,
                  title: "LinkedIn Marketing",
                  desc: "Build professional credibility and network with a polished LinkedIn strategy, tailored for B2B engagement.",
                  color: "text-green-600",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Content Strategy",
                  desc: "Our expert team crafts compelling content strategies and creative posts that tell your brand’s story and resonate with your audience.",
                  color: "text-green-600",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Analytics & Optimization",
                  desc: "We continuously measure campaign performance and optimize every detail based on data insights to maximize ROI.",
                  color: "text-green-600",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Influencer Partnerships",
                  desc: "Collaborate with trusted influencers to expand your reach and lend authenticity to your campaigns.",
                  color: "text-green-600",
                },
              ].map(({ icon, title, desc, color }) => (
                <div
                  key={title}
                  className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    {React.cloneElement(icon, {
                      className: `text-3xl ${color} mr-2`,
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
              Our Campaign Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  step: "1. Research & Audience Analysis",
                  desc: "We start by diving deep into market trends, audience behaviors, and competitor analysis to shape a strategy that drives engagement.",
                },
                {
                  step: "2. Strategy & Content Planning",
                  desc: "Our team creates a comprehensive plan that includes creative content, platform‑specific strategies, and actionable advertising plans.",
                },
                {
                  step: "3. Execution & Monitoring",
                  desc: "We implement your campaign across relevant platforms while monitoring performance in real time to ensure optimal delivery.",
                },
                {
                  step: "4. Review & Optimization",
                  desc: "Through continuous analysis and feedback, we refine your campaigns, optimizing for superior performance and measurable results.",
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
                  title: "Brand Engagement Uplift",
                  desc: "A well‑executed campaign that increased audience engagement by 55% in just three months.",
                },
                {
                  title: "Conversion Boost",
                  desc: "Our targeted strategy for a retail brand resulted in a 40% increase in online conversions.",
                },
                {
                  title: "Influencer Success",
                  desc: "Collaborating with industry influencers helped amplify reach and drive significant brand buzz.",
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

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "How do you determine the right platforms for my campaign?",
                  a: "We assess your target audience and industry trends to determine the best platforms for reaching your customers.",
                },
                {
                  q: "Can you manage campaigns across multiple networks simultaneously?",
                  a: "Yes, our integrated approach allows us to run concurrent campaigns on Facebook, Twitter, Instagram, and LinkedIn seamlessly.",
                },
                {
                  q: "What is the typical duration of a campaign?",
                  a: "While campaign length varies based on objectives, most of our projects run between 1 to 3 months with ongoing evaluation and adjustment.",
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
              Ready to Elevate Your Social Presence?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today and let’s create a social media campaign that
              drives real results.
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

export default Smo;
