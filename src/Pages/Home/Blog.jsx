// src/Pages/Blog.jsx

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";

// ripple effect hook unchanged
const useRipple = canvasRef => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let circles = [];
    const COUNT = 4;
    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const max = Math.hypot(canvas.width, canvas.height);
      circles = Array.from({ length: COUNT }, (_, i) => ({
        r: (max / COUNT) * i,
        speed: (max / COUNT) * 0.005,
        alpha: 0.2,
        max
      }));
    }
    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2, cy = height / 2;
      circles.forEach(c => {
        c.r += c.speed;
        if (c.r > c.max) c.r = 0;
        c.alpha = 0.2 * (1 - c.r / c.max);
        ctx.beginPath();
        ctx.arc(cx, cy, c.r, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(30,167,201,${c.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => window.removeEventListener("resize", resize);
  }, [canvasRef]);
};

export default function Blog() {
  const canvasRef = useRef();
  useRipple(canvasRef);

  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${server}/blog/get-all-blogs`)
      .then(res => {
        const data = res.data.blogs.map(p => ({
          id: p._id,
          title: p.title,
          img: p.photos?.[0]?.url || "/images/fallback.png",
          date: new Date(p.createdAt).toLocaleDateString(undefined, {
            year: "numeric", month: "long", day: "numeric"
          }),
          excerpt: p.content.length > 150
            ? p.content.slice(0, 150).trim() + "…"
            : p.content
        }));
        setAllPosts(data);
      })
      .catch(() => console.error("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  // apply search filter
  const posts = allPosts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-white">Loading posts…</span>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-white">No blog posts found.</span>
      </div>
    );
  }

  // split out featured + secondary + rest
  const featured = posts[0];
  const secondary = posts.slice(1, 3);
  const rest = posts.slice(3, displayCount);

  return (
    <section
      id="blog"
      className="relative bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold">
            From Our <span className="text-cyan-400">Blog</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and best practices from our engineering and
            design teams.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search articles…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-full text-gray-800 focus:outline-none"
          />
        </div>

        {/* Featured + Secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-2 overflow-hidden rounded-3xl shadow-2xl group"
          >
            <Link to={`/blog/${featured.id}`}>
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-96 object-cover group-hover:scale-105 transform transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white max-w-xl">
                <time className="text-sm text-gray-300">{featured.date}</time>
                <h3 className="mt-2 text-4xl font-bold">{featured.title}</h3>
                <p className="mt-4 text-gray-200">{featured.excerpt}</p>
                <span className="inline-block mt-4 px-4 py-2 border border-cyan-400 rounded-full text-sm font-semibold
                                  hover:bg-cyan-400 hover:text-white transition">
                  Read full article →
                </span>
              </div>
            </Link>
          </motion.article>

          <div className="space-y-8">
            {secondary.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 1) * 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                <Link to={`/blog/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transform transition"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <time className="text-xs text-gray-300">{p.date}</time>
                    <h4 className="mt-1 text-2xl font-semibold">{p.title}</h4>
                    <span className="inline-block mt-2 text-sm text-cyan-400
                                      hover:underline">
                      Continue reading →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Grid of rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {rest.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 * i }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <Link to={`/blog/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <time className="text-xs text-gray-400">{p.date}</time>
                    <h5 className="mt-2 text-xl font-semibold text-white">{p.title}</h5>
                    <p className="mt-2 text-gray-300 text-sm">{p.excerpt}</p>
                    <span className="inline-block mt-4 text-sm font-semibold text-cyan-400
                                      hover:text-cyan-300 transition">
                      Read more →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {displayCount < posts.length && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(c => c + 6)}
              className="px-6 py-2 bg-cyan-400 text-white rounded-full hover:bg-cyan-300 transition"
            >
              Load more posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
