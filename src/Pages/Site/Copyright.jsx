import { motion } from "framer-motion";
import { FaCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";

const items = [
  {
    title: "Ownership of Content",
    desc: "All content, including text, images, code, designs, software, and graphics, on Ananta Technology’s website and platforms is the intellectual property of Ananta Technology or its licensors, protected by copyright laws.",
  },
  {
    title: "Use of Materials",
    desc: "You may not copy, reproduce, distribute, transmit, display, or create derivative works from any content without prior written consent from Ananta Technology, except where explicitly permitted for personal, non-commercial use.",
  },
  {
    title: "Reporting Infringement",
    desc: (
      <>
        If you believe your work has been used without authorization, contact us at{" "}
        <a href="mailto:support@anantatechnology.com" className="text-blue-400 underline">
        support@anantatechnology.com
        </a>{" "}
        with your name, contact info, description of the work, infringing URL, unauthorized use statement, and your signature.
      </>
    ),
  },
  {
    title: "Response & Removal",
    desc: "Upon receiving a valid notice, we will investigate and may remove or restrict access to infringing material. Repeat infringers’ accounts may be terminated.",
  },
  {
    title: "Policy Updates",
    desc: "We may update this policy from time to time; changes will be posted here with a new effective date.",
  },
];

const Copyright = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Copyright Policy | Ananta Technology"
        description="Read Ananta Technology’ Copyright Policy: ownership of content, permitted use, how to report infringement, and takedown procedures."
        keywords="copyright policy, intellectual property, DMCA, content ownership, Ananta Technology"
        url={`${window.location.origin}/copyright`}
        image={`${window.location.origin}/assets/og-copyright.png`}
      />
   
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-36">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaCopyright className="text-6xl mb-4 text-green-400 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Copyright Policy</h1>
          <p className="text-sm md:text-base text-gray-300">Effective Date: March 31, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {items.map(({ title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-200 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a question or need help?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Reach out to our legal team for any copyright inquiries.
          </p>
          <button
            onClick={() => navigate("/contact-page")}
            className="inline-block bg-gradient-to-r from-[#915EFF] to-purple-600 py-3 px-8 rounded-full font-semibold transition hover:opacity-90"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Copyright;
