// src/components/ContactForm/ContactForm.js
import  { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";


export const ErrorText = styled.span`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const interestOptions = [
  "WEB-DEVELOPMENT",
  "MOBILE-DEVELOPMENT",
  "MARKETING",
  "SEO",
  "SMO",
  "CONTENT MANAGEMENT SYSTEM",
  "OTHER",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9\-\+]{7,15}$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interests: [],
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const canvasRef = useRef(null);

  // Vibrating-triangle canvas (unchanged)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes vibrate {
        0% { transform: translate(2px,1px) rotate(0deg); }
        20% { transform: translate(-1px,-2px) rotate(-1deg); }
        40% { transform: translate(-3px,0px) rotate(1deg); }
        60% { transform: translate(0px,2px) rotate(0deg); }
        80% { transform: translate(1px,-1px) rotate(1deg); }
        100% { transform: translate(-1px,2px) rotate(-1deg); }
      }
      .vibrate { animation: vibrate 0.3s linear infinite; }
      .halfTriCanvas { position:absolute; top:0; left:0; width:100%; height:100%; }
    `;
    document.head.appendChild(style);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafID,
      isVibrating = false;
    let triPoints = [];

    const pointInTri = ({ x: px, y: py }, p0, p1, p2) => {
      const A =
        0.5 *
        (-p1.y * p2.x +
          p0.y * (-p1.x + p2.x) +
          p0.x * (p1.y - p2.y) +
          p1.x * p2.y);
      const sign = A < 0 ? -1 : 1;
      const s =
        (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * px + (p0.x - p2.x) * py) *
        sign;
      const t =
        (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * px + (p1.x - p0.x) * py) *
        sign;
      return s > 0 && t > 0 && s + t < 2 * A * sign;
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      triPoints = [
        { x: canvas.width, y: canvas.height },
        { x: canvas.width - canvas.width / 2, y: canvas.height },
        { x: canvas.width, y: canvas.height - canvas.height / 2 },
      ];
      draw();
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(triPoints[0].x, triPoints[0].y);
      ctx.lineTo(triPoints[1].x, triPoints[1].y);
      ctx.lineTo(triPoints[2].x, triPoints[2].y);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();
      rafID = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      const hover = pointInTri(pt, triPoints[0], triPoints[1], triPoints[2]);
      if (hover && !isVibrating) {
        isVibrating = true;
        document.body.classList.add("vibrate");
      } else if (!hover && isVibrating) {
        isVibrating = false;
        document.body.classList.remove("vibrate");
      }
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", () => {
      isVibrating = false;
      document.body.classList.remove("vibrate");
    });

    resize();
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafID);
      document.body.classList.remove("vibrate");
    };
  }, []);

  // Text & select change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  // Toggle interest buttons
  const handleInterestChange = (opt) => {
    setFormData((fd) => {
      const exists = fd.interests.includes(opt);
      return {
        ...fd,
        interests: exists
          ? fd.interests.filter((i) => i !== opt)
          : [...fd.interests, opt],
      };
    });
    setErrors((errs) => ({ ...errs, interests: undefined }));
  };

  // EmailJS submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = {};
    if (!formData.name.trim()) v.name = "Name required";
    if (!phoneRegex.test(formData.phone)) v.phone = "Valid phone required";
    if (!formData.email.trim()) v.email = "Email required";
    else if (!emailRegex.test(formData.email)) v.email = "Invalid email";
    if (!formData.interests.length) v.interests = "Select at least one";
    if (!formData.budget) v.budget = "Please choose a budget";

    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATES_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          interests: formData.interests.join(", "),
          budget: formData.budget,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSnackOpen(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          interests: [],
          budget: "",
        });
        setErrors({});
      })
      .catch((err) => console.error("EmailJS error:", err))
      .finally(() => setLoading(false));
  };

  const handleCloseSnack = (_, reason) => {
    if (reason !== "clickaway") setSnackOpen(false);
  };

  return (
    <>
    
    <section className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
      <canvas ref={canvasRef} className="halfTriCanvas" />
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold"
        >
          Get A <span className="text-[#915EFF]">Quote</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto w-24"
        >
          <Bottomline />
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl"
        >
          {/* Name */}
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>

          {/* Interests */}
          <fieldset className="space-y-2">
            <legend className="text-gray-300">YOU ARE INTERESTED IN*</legend>
            <div className="flex flex-wrap gap-4 justify-center">
              {interestOptions.map((opt) => {
                const sel = formData.interests.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleInterestChange(opt)}
                    className={`
                      px-4 py-2 rounded-lg border-2 font-medium transition
                      ${
                        sel
                          ? "bg-[#915EFF] text-white border-[#915EFF]"
                          : "bg-transparent text-gray-300 border-gray-300 hover:border-purple-600"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {errors.interests && <ErrorText>{errors.interests}</ErrorText>}
          </fieldset>

          {/* Budget */}
          <div>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
            >
              <option value="">Select Budget*</option>
              <option value="<5K">&lt;5K</option>
              <option value="5-10K">$5K–10K</option>
              <option value="10-20K">$10K–20K</option>
              <option value=">20K">&gt;20K</option>
              <option value="UNKNOWN">I DON’T KNOW YET</option>
            </select>
            {errors.budget && <ErrorText>{errors.budget}</ErrorText>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-semibold ${
              loading
                ? "bg-gray-600 cursor-not-allowed opacity-60"
                : "bg-gradient-to-r from-[#915EFF] to-purple-600 hover:opacity-90"
            }`}
          >
            {loading ? "Sending..." : "REQUEST A JOURNEY"}
          </button>
        </form>

        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleCloseSnack} severity="success" variant="filled">
            Thanks! We’ll reach out soon.
          </Alert>
        </Snackbar>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
