import { motion } from "framer-motion";
import { FaDraftingCompass } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SEO from "../../../Components/SEO";

const UIUXDesign = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="UI/UX Interfaces | Ananta Technology"
        description="Intuitive UI/UX design services combining user research, wireframing, prototyping, and visual design to craft engaging web and mobile experiences that drive conversions.	"
        keywords="UI design, UX design, user research, wireframing, prototyping, interaction design, visual design, usability testing"
        url="https://www.anantatechnology.com/services/ui-ux-design"
      />

      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white py-20">
          <div className="container mx-auto px-4 text-center py-24">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <FaDraftingCompass className="text-6xl mb-4  text-green-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-pink-600">UI</span> &amp;{" "}
              <span className="text-green-600">UX</span> Design Services
            </h1>
            <p className="bg-text-xl md:text-2xl mb-8">
              Creating intuitive, engaging interfaces that delight users and
              drive conversions.
            </p>
            <button
              onClick={() => navigate("/contact-page")}
              className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
            >
              Get a Quote
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Why Our UI/UX Design Excels
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We blend user research, data-driven insights, and creative design
              to build interfaces that are not only beautiful but also highly
              usable. From wireframes to prototypes, our process ensures every
              interaction feels natural.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className=" py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Our UI/UX Design Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  User Research
                </h3>
                <p className="text-gray-200">
                  In-depth interviews, surveys, and analytics review to uncover
                  real user needs.
                </p>
              </div>

              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Wireframing & Prototyping
                </h3>
                <p className="text-gray-300">
                  Low- and high-fidelity wireframes to validate structure and
                  flow before development.
                </p>
              </div>

              <div className=" bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Visual Design
                </h3>
                <p className="text-gray-300">
                  Pixel-perfect mockups with consistent branding and accessible
                  color palettes.
                </p>
              </div>

              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  Interaction Design
                </h3>
                <p className="text-gray-200">
                  Micro‑interactions and animations that guide and delight
                  users.
                </p>
              </div>

              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Usability Testing
                </h3>
                <p className="text-gray-300">
                  Real‑user feedback sessions to refine flows and eliminate
                  friction.
                </p>
              </div>

              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Design Systems
                </h3>
                <p className="text-gray-300">
                  Scalable component libraries and style guides for consistent,
                  efficient builds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8  text-white">
              Our Design Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  1. Discovery & Research
                </h3>
                <p className="text-gray-300">
                  We kick off with stakeholder workshops and user interviews to
                  define goals and pain points.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  2. Wireframes & Flows
                </h3>
                <p className="text-gray-300">
                  Sketching out user journeys and screen layouts to ensure
                  smooth navigation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  3. Visual Mockups
                </h3>
                <p className="text-gray-300">
                  Crafting high-fidelity designs that reflect your brand and
                  resonate with users.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  4. Prototype & Test
                </h3>
                <p className="text-gray-300">
                  Interactive prototypes tested with real users, incorporating
                  feedback iteratively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  5. Handoff & Support
                </h3>
                <p className="text-gray-300">
                  Developer‑ready specs and ongoing design QA to ensure
                  pixel-perfect implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Featured Projects
            </h2>
            {/* <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        A snapshot of recent UI/UX engagements where we transformed ideas into delightful experiences.
                    </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Fintech Dashboard
                </h3>
                <p className="text-gray-300">
                  Clean, data‑driven interface for managing investments on the
                  go.
                </p>
              </div>
              <div className=" bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  Health App
                </h3>
                <p className="text-gray-300">
                  User‑centric mobile experience for tracking wellness and
                  appointments.
                </p>
              </div>
              <div className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  E‑commerce UX Revamp
                </h3>
                <p className="text-gray-300">
                  Streamlined checkout flow that boosted conversions by 25%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16 bg-gray-50 bg-gradient-to-r from-green-500 to-teal-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Meet the Designers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Alice Nguyen", role: "Lead UX Researcher" },
                            { name: "Brian Kim", role: "Senior UI Designer" },
                            { name: "Celia Martinez", role: "Interaction Designer" },
                        ].map((member) => (
                            <div key={member.name} className="text-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt={member.name}
                                    className="mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-700">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

        {/* Testimonials Section */}
        <section className="py-16  bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] p-6 rounded-lg shadow">
                <p className="text-gray-300 italic">
                  “Their attention to detail and user‑first approach transformed
                  our product’s UX. Engagement is through the roof!”
                </p>
                <p className="mt-4 font-semibold text-purple-500">
                  – Sarah Lee, Product Manager @ FinServe
                </p>
              </div>
              <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] p-6 rounded-lg shadow">
                <p className="text-gray-300 italic">
                  “From concept to prototype, the team delivered exactly what we
                  needed—and faster than expected.”
                </p>
                <p className="mt-4 font-semibold text-purple-500">
                  – David Patel, CTO @ HealthTrack
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className=" py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl  font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto ">
              {[
                {
                  q: "How long does the UI/UX process take?",
                  a: "Typical engagements range from 4–8 weeks depending on scope (research, wireframes, prototyping).",
                },
                {
                  q: "Do you share design files and specs?",
                  a: "Yes—Figma or Sketch files, plus developer handoff with Zeplin or Storybook specs.",
                },
                {
                  q: "Can you work with our existing brand guidelines?",
                  a: "Absolutely. We align with your color palettes, typography, and voice to maintain consistency.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className=" bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
                >
                  <h3 className="font-semibold text-lg text-gray-200">{q}</h3>
                  <p className="text-gray-300 mt-2">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call‑to‑Action Section */}
        <section className="bg-gradient-to-r  from-[#38B6FF] to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Let’s collaborate to craft interfaces your users will love. Get in
              touch today!
            </p>
            <button
              onClick={() => navigate("/contact-page")}
              className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
            >
              Book a Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default UIUXDesign;
