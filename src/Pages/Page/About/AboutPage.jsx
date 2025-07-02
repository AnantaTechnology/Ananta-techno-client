import { motion } from "framer-motion";
import Bottomline from "../../../Components/BottomLine/Bottomline";
import {
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaHandsHelping,
  FaQuoteLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../../Components/SEO";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring" },
  }),
};

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Happy Clients", value: "120+" },
  { label: "Years of Experience", value: "5" },
  { label: "Team Members", value: "25+" },
];

const values = [
  {
    icon: <FaRocket className="text-4xl text-indigo-500" />,
    title: "Innovation",
    desc: "We embrace creativity to build cutting-edge solutions.",
  },
  {
    icon: <FaGlobe className="text-4xl text-green-500" />,
    title: "Reliability",
    desc: "Delivering robust and dependable services every time.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    title: "Security",
    desc: "Protecting your data with top-notch security standards.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-yellow-500" />,
    title: "Collaboration",
    desc: "Working closely with you for a seamless partnership.",
  },
];

const testimonials = [
  {
    quote:
      "Ananta Technology transformed our digital presence—our engagement skyrocketed!",
    author: "– Priya Sharma, Product Lead",
  },
  {
    quote:
      "Their attention to detail and communication made our project a success.",
    author: "– Rahul Mehta, CEO, ShopEase",
  },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Ananta Technology"
        description="Learn about Ananta Technology—our journey, values, team size and mission to deliver innovative, secure, and reliable IT solutions."
        keywords="Ananta Technology, About Ananta, IT Solutions, Company History, Core Values"
        url="https://www.anantatechnology.com/about-page"
        image="https://www.anantatechnology.com/assets/Ananta Technology.png"
      />

      <main className="font-sans">
        {/* Hero */}
        <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468]  text-white py-36 px-6 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            About <span className="text-purple-500">Ananta</span> Technology
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-24"
          >
            <Bottomline />
          </motion.div>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            Empowering businesses with innovative, secure, and scalable IT
            solutions. We turn your vision into reality.
          </motion.p>
        </section>

        {/* Our Journey */}
        <section className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e]  text-white overflow-hidden  py-20 px-6 sm:px-16">
          <div className="max-w-4xl mx-auto  md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Our Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ananta Technology began life as a scrappy startup,
                laser‑focused on crafting pixel‑perfect websites for our first
                local clients. Very quickly, we discovered that our real passion
                lay in solving complex business challenges with end‑to‑end
                technology—so we expanded into native mobile development for
                both iOS and Android, building seamless, high‑performance apps
                users love. Next, we grew our expertise on the web by embracing
                the MERN stack (MongoDB, Express, React, Node.js), delivering
                dynamic, data‑driven applications with rock‑solid architectures.
                As our clients’ needs evolved, we added SEO and SMO services to
                our toolkit—making sure every site and app we build gets found
                and shared. We also doubled down on design excellence, creating
                intuitive UI/UX flows and launching custom CMS platforms that
                let non‑technical teams manage content effortlessly. From
                wireframes and prototypes to polished, production‑ready
                interfaces, our design process keeps users front and center.
                Today, as a lean but mighty team of passionate full‑stack
                engineers, designers, and strategists, we combine agility with
                deep technical know‑how to deliver solutions that scale. Whether
                you need a native mobile app, a powerful MERN‑stack dashboard, a
                high‑impact SEO strategy, or an elegant CMS, Ananta Technology
                is your partner for turning vision into reality.
              </p>
              <Link
                to="/contact-page"
                className="inline-block mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats (Two-color background) */}
        <section className="w-fullrelative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
          <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-center px-6 sm:px-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i}
              >
                <h3 className="text-4xl font-extrabold">{s.value}</h3>
                <p className="mt-2 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Core Values
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i}
                className="p-6 rounded-xl text-center hover:shadow-lg transition "
              >
                <div className="mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  {v.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {v.title}
                </h4>
                <p className="text-gray-300">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Clients Say
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i}
                className="relative bg-white bg-opacity-10 p-8 rounded-lg"
              >
                <FaQuoteLeft className="absolute top-4 left-4 text-4xl opacity-20" />
                <p className="italic mb-4">“{t.quote}”</p>
                <p className="font-semibold">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center px-6 sm:px-16 bg-gradient-to-r  from-[#38B6FF] to-purple-600 text-white ">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with us for solutions that drive growth, efficiency, and
            innovation. Let’s build something remarkable together!
          </p>
          <Link
            to="/contact-page"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-500 transition"
          >
            Contact Us Today
          </Link>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
