import { Email, LocationCity, Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const url = useNavigate();

  const copyRightUrl = () => {
    url("/copyright");
  };

  const termsUrl = () => {
    url("/terms-of-use");
  };

  const privacyUrl = () => {
    url("/privacy");
  };

  const policyUrl = () => {
    url("/policy");
  };

  return (
    <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-6 sm:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Ananta <span className="text-[#915EFF]">Technology</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering innovative IT solutions that transform businesses. We
            specialize in web development, mobile applications, cloud solutions,
            AI & ML integration, and cybersecurity services tailored to your
            needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li
              className="hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={termsUrl}
            >
              Terms of Use
            </li>
            <li
              className="hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={privacyUrl}
            >
              Privacy Statement
            </li>
            <li
              className="hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={policyUrl}
            >
              Policy
            </li>
            <li
              className="hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={copyRightUrl}
            >
              Copyright
            </li>
          </ul>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Latest Insights</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              🚀 The Future of AI in Business
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              🔐 Best Practices for Cybersecurity in 2024
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              ☁️ Cloud Solutions: Why Your Business Needs It
            </li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">
              📱 Mobile App Trends in 2024
            </li>
          </ul>
        </div>

        {/* Contact Details & Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm py-1">
            <Phone sx={{ fontSize: 18, color: "#915EFF" }} /> +91 95 9951 6256
          </p>
          <p className="text-gray-400 text-sm py-1">
            <Email sx={{ fontSize: 18, color: "#915EFF" }} />{" "}
            support@anantatechnology.com
          </p>
          <p className="text-gray-400 text-sm py-1">
            <LocationCity sx={{ fontSize: 18, color: "#915EFF" }} /> RZB-214 Old
            Meheauli road, Raj Nagar, New Delhi, Delhi, 110045, India.
          </p>
          {/* <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl">🌐</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl">💼</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl">📸</a>
          </div> */}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 bg-slate-800 rounded-lg p-10 text-center shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Have a project in mind? {"Let's"} build it together.
        </h3>
        <button
          className="mt-4 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300"
          onClick={() => url("/contact-page")}
        >
          Get a Quote
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ananta Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
