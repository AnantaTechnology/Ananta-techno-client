import Bottomline from "../../Components/BottomLine/Bottomline";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

export const ErrorText = styled.span`
  color: "#ff6b6b";
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const canvasRef = useRef(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({
      ...errs,
      [name]: !value.trim() ? "Required" : undefined,
    }));
    if (name === "email" && value && !emailRegex.test(value)) {
      setErrors((errs) => ({ ...errs, email: "Invalid email" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = {};
    if (!form.name.trim()) v.name = "Name required";
    if (!form.email.trim()) v.email = "Email required";
    else if (!emailRegex.test(form.email)) v.email = "Invalid email";
    if (!form.message.trim()) v.message = "Message required";
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSnackOpen(true);
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const handleCloseSnack = (_, reason) => {
    if (reason !== "clickaway") setSnackOpen(false);
  };

  useEffect(() => {
    // Inject vibrate keyframes
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
    let raf;
    let isVibrating = false;
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
      raf = requestAnimationFrame(draw);
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
      cancelAnimationFrame(raf);
      document.body.classList.remove("vibrate");
    };
  }, []);

  return (
    <>
     
      <section className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
        <canvas ref={canvasRef} className="halfTriCanvas" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold"
          >
            Get in <span className="text-[#915EFF]">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto w-24"
          >
            <Bottomline />
          </motion.div>
          <p className="text-lg text-gray-300">
            Tell us about your project and we'll get back with a quote.
          </p>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </div>
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Project Details"
                  className="w-full p-4 bg-gray-800 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none text-white"
                />
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg bg-gradient-to-r from-[#915EFF] to-purple-600 font-semibold ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <Snackbar
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert
              onClose={handleCloseSnack}
              severity="success"
              variant="filled"
            >
              Thank you! {"We'll"} reach out soon.
            </Alert>
          </Snackbar>
        </div>
      </section>
    </>
  );
};

export default Contact;
