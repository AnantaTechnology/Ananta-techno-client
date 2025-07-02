import { motion } from "framer-motion";
import ContactForm from "../../Home/Quote";
import SEO from "../../../Components/SEO";

const ContactPage = () => {
  const canonicalUrl = "https://www.anantatechnology.com/contact-page";
  return (
    <>
      <SEO
        title="Contact Us | Ananta Technology"
        description="Get in touch with Ananta Technology for custom web development, digital marketing, and IT solutions. We're here to help bring your vision to life."
        keywords="Ananta Technology contact, web development inquiry, digital marketing inquiry, IT solutions contact"
        url={canonicalUrl}
        image="https://www.anantatechnology.com/contact-page/assets/Ananta Technology.png"
      />

      <div className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
        
        {/* Contact Info Cards */}
        <ContactForm />

        <section className="py-16 mt-12 w-full max-w-6xl mx-auto z-30 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-200">
                <a
                  href="mailto:support@anantatechnology.com"
                  className="hover:underline"
                >
                  support@anantatechnology.com
                </a>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-200">
                <a href="tel:+919599516256" className="hover:underline">
                  +91 95 9951 6256
                </a>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-200">
                RZB-214 Old Meheauli Road, Raj Nagar, New Delhi, India
              </p>
            </motion.div>


          </div>

           {/* Map Section (now full width) */}
        <section className="w-full px-0 mt-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-full"
          >

            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5153092073233!2d77.08367937597984!3d28.584313875691088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29182cd90b477205%3A0xafbdc18388b8d100!2sAnanta%20Technology%20-%20IT%20Company!5e0!3m2!1sen!2sin!4v1745860843872!5m2!1sen!2sin"
              // width="1200"
              // height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 rounded-xl shadow-2xl"
            ></iframe>
          </motion.div>
        </section>
        </section>

      </div>
    </>
  );
};

export default ContactPage;
