// src/Components/Navbar/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Ananta Technology.png";
import { Menu, Close, ArrowDropDown } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../Loader/Loader"; // adjust path to your existing Loader component

/* your services list */
import { services } from "../../Pages/Home/Services";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-page" },
  {
    title: "Services",
    subLinks: services.map((s) => ({
      title: s.title,
      href: s.link,
    })),
  },
  { title: "Projects", href: "/projects/project-page" },
  { title: "Contact", href: "/contact-page" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setPageLoading(true);
    setActive("Home");
    setToggle(false);
    setTimeout(() => {
      navigate("/");
      setPageLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Full-screen loader */}
      {pageLoading && <Loader />}

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full py-3 px-6 sm:px-16 z-40 transition-all ${scrolled ? "bg-slate-950 shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="logo"
              className="h-16 sm:h-20 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 900 }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((nav) => {
                const hasSub = !!nav.subLinks?.length;
                const isHome = nav.title === "Home";
                return (
                  <li
                    key={nav.title}
                    className="relative group text-lg font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setActive(nav.title)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      {isHome ? (
                        <a href="/" onClick={handleHomeClick}>
                          Home
                        </a>
                      ) : (
                        <Link to={nav.href}>{nav.title}</Link>
                      )}
                      {hasSub && <ArrowDropDown fontSize="small" />}
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-[#915EFF]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {hasSub && (
                      <div className="absolute left-0 top-full mt-1 hidden w-64 flex-col rounded-md bg-slate-500 py-3 shadow-lg group-hover:flex z-10">
                        {nav.subLinks.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.href}
                            onClick={() => setActive(sub.title)}
                            className="px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Get A Quote button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact-page"
                className="bg-gradient-to-r from-[#915EFF] to-purple-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition-all"
              >
                Get A Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile burger icon */}
          <div className="sm:hidden">
            {toggle ? (
              <Close onClick={() => setToggle(false)} className="text-white text-3xl cursor-pointer" />
            ) : (
              <Menu onClick={() => setToggle(true)} className="text-white text-3xl cursor-pointer" />
            )}
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-20 right-0 z-20 w-[80%] max-w-sm rounded-lg bg-slate-900 p-6 shadow-lg"
              >
                <ul className="flex flex-col gap-6 text-white font-medium">
                  {navLinks.map((nav) => {
                    const hasSub = !!nav.subLinks?.length;
                    return (
                      <div key={nav.title}>
                        <motion.li
                          className={`flex items-center justify-between text-base ${active === nav.title ? "text-[#915EFF]" : "text-gray-300 hover:text-white"
                            }`}
                          whileHover={{ x: 5 }}
                          onClick={(e) => {
                            if (nav.title === "Home") {
                              handleHomeClick(e);
                            } else if (!hasSub) {
                              setActive(nav.title);
                              setToggle(false);
                              navigate(nav.href);
                            }
                          }}
                        >
                          <span className="cursor-pointer">{nav.title}</span>
                          {hasSub && (
                            <ArrowDropDown
                              className={`cursor-pointer transform ${servicesOpen ? "rotate-180" : ""}`}
                              onClick={() => setServicesOpen((o) => !o)}
                            />
                          )}
                        </motion.li>

                        {/* Mobile submenu */}
                        {hasSub && servicesOpen && (
                          <AnimatePresence>
                            <motion.ul
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                            >
                              {nav.subLinks.map((sub) => (
                                <li
                                  key={sub.title}
                                  className="text-gray-300 hover:text-white text-sm"
                                  onClick={() => {
                                    setActive(sub.title);
                                    setToggle(false);
                                    setServicesOpen(false);
                                    navigate(sub.href);
                                  }}
                                >
                                  <Link to={sub.href}>{sub.title}</Link>
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  })}

                  <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact-page"
                      onClick={() => setToggle(false)}
                      className="block mt-4 bg-gradient-to-r from-[#915EFF] to-purple-600 px-4 py-2 rounded-lg text-center text-white font-semibold shadow-md"
                    >
                      Get A Quote
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
