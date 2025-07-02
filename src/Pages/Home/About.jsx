import Bottomline from "../../Components/BottomLine/Bottomline";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inject vibrate keyframes CSS
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @keyframes vibrate {
        0% { transform: translate(2px, 1px) rotate(0deg); }
        20% { transform: translate(-1px, -2px) rotate(-1deg); }
        40% { transform: translate(-3px, 0px) rotate(1deg); }
        60% { transform: translate(0px, 2px) rotate(0deg); }
        80% { transform: translate(1px, -1px) rotate(1deg); }
        100% { transform: translate(-1px, 2px) rotate(-1deg); }
      }
      .vibrate {
        animation: vibrate 0.3s linear infinite;
      }
    `;
    document.head.appendChild(styleEl);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    const margin = 10;
    const baseRadius = 140;
    let currentRadius = baseRadius;
    let isBubbleVibrating = false;
    let isTriangleVibrating = false;
    const mouse = { x: null, y: null };

    // Shapes
    const bubble = { x: 0, y: 0 };
    const triangle = { points: [] };
    const lineShape = { start: null, end: null };
    const smallBubbles = [];
    const halfBubbles = [];

    const initBubbles = () => {
      smallBubbles.length = 0;
      for (let i = 0; i < 25; i++) {
        const r = Math.random() * 12 + 4;
        smallBubbles.push({
          x: Math.random() * (canvas.width - 2 * margin) + margin,
          y: canvas.height - r - margin,
          radius: r,
          dy: -(Math.random() * 0.5 + 0.2),
        });
      }
      halfBubbles.length = 0;
      for (let i = 0; i < 12; i++) {
        const r = Math.random() * 12 + 4;
        halfBubbles.push({
          x: Math.random() * (canvas.width - 2 * margin) + margin,
          y: canvas.height - margin,
          radius: r,
          dy: -(Math.random() * 0.3 + 0.1),
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Main bubble bottom-right
      bubble.x = canvas.width - baseRadius - margin;
      bubble.y = canvas.height - baseRadius - margin;
      currentRadius = baseRadius;

      // Triangle top-left
      const triSize = 350;
      triangle.points = [
        { x: margin, y: margin },
        { x: margin + triSize, y: margin },
        { x: margin, y: margin + triSize },
      ];

      // Separator under heading
      lineShape.start = { x: canvas.width * 0.2, y: canvas.height * 0.25 };
      lineShape.end = { x: canvas.width * 0.8, y: canvas.height * 0.25 };

      initBubbles();
      draw();
    };

    // Point-in-triangle helper
    const pointInTriangle = (px, py, p0, p1, p2) => {
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

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update small bubbles
      smallBubbles.forEach((b) => {
        b.y += b.dy;
        if (b.y + b.radius < 0) b.y = canvas.height - margin;
      });
      halfBubbles.forEach((h) => {
        h.y += h.dy;
        if (h.y + h.radius < 0) h.y = canvas.height - margin;
      });

      // Draw triangle
      ctx.beginPath();
      triangle.points.forEach((pt, i) => {
        const vx = isTriangleVibrating ? (Math.random() - 0.5) * 8 : 0;
        const vy = isTriangleVibrating ? (Math.random() - 0.5) * 8 : 0;
        if (i === 0) ctx.moveTo(pt.x + vx, pt.y + vy);
        else ctx.lineTo(pt.x + vx, pt.y + vy);
      });
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw separator
      ctx.beginPath();
      ctx.moveTo(lineShape.start.x, lineShape.start.y);
      ctx.lineTo(lineShape.end.x, lineShape.end.y);
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw main bubble
      const bx = isBubbleVibrating ? (Math.random() - 0.5) * 8 : 0;
      const by = isBubbleVibrating ? (Math.random() - 0.5) * 8 : 0;
      ctx.beginPath();
      ctx.arc(bubble.x + bx, bubble.y + by, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(30,167,201,0.2)";
      ctx.fill();

      // Draw small bubbles
      smallBubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(30,167,201,0.4)";
        ctx.fill();
      });
      // Draw half-bubbles
      halfBubbles.forEach((h) => {
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.radius, 0, Math.PI, true);
        ctx.fillStyle = "rgba(30,167,201,0.1)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Bubble hover
      const dx = mouse.x - bubble.x;
      const dy = mouse.y - bubble.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < baseRadius) {
        if (!isBubbleVibrating) {
          isBubbleVibrating = true;
          currentRadius = baseRadius * 1.5;
        }
      } else if (isBubbleVibrating) {
        isBubbleVibrating = false;
        currentRadius = baseRadius;
      }

      // Triangle hover
      isTriangleVibrating = pointInTriangle(
        mouse.x,
        mouse.y,
        triangle.points[0],
        triangle.points[1],
        triangle.points[2]
      );

      // Full-page vibrate
      if (isBubbleVibrating || isTriangleVibrating)
        document.body.classList.add("vibrate");
      else document.body.classList.remove("vibrate");
    };

    const handleMouseLeave = () => {
      isBubbleVibrating = false;
      isTriangleVibrating = false;
      currentRadius = baseRadius;
      document.body.classList.remove("vibrate");
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    return () => {
      document.head.removeChild(styleEl);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      document.body.classList.remove("vibrate");
    };
  }, []);

  return (
    <>
      

      <section
        id="about"
        className="relative z-10 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden"
      >
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-auto"
        />

        {/* Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            About <span className="text-[#1ea7c9]">Ananta</span> Technology
          </h2>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-40"
          >
            <Bottomline />
          </motion.div>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            At Ananta Technology, we are dedicated to delivering cutting-edge
            IT solutions that empower businesses to thrive in a digital-first
            world. Our mission is to provide scalable, secure, and
            high-performance applications tailored to meet the unique needs of
            startups, SMBs, and enterprises.
          </p>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            With a proven track record in web development, mobile solutions,
            cloud integration, and cybersecurity, our expert team ensures that
            every project we undertake drives innovation, enhances productivity,
            and achieves measurable results.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">🎯 Our Mission</h3>
              <p className="text-sm text-gray-400">
                To harness the power of technology and provide solutions that
                enable businesses to achieve operational excellence, drive
                growth, and stay ahead in a competitive market.
              </p>
            </div>
            <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">💡 Our Vision</h3>
              <p className="text-sm text-gray-400">
                To be a globally recognized IT solutions provider, known for
                delivering innovative, reliable, and user-centric technology
                services that transform ideas into reality.
              </p>
            </div>
            <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">🤝 Why Choose Us</h3>
              <p className="text-sm text-gray-400">
                We prioritize client satisfaction through continuous
                collaboration, transparent communication, and a results-driven
                approach. Our team of experts is committed to delivering
                solutions that align with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
