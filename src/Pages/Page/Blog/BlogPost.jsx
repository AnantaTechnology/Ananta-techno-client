import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";
import SEO from "../../../Components/SEO";
import { server } from "../../../server";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // 1) Fetch the single post
    axios
      .get(`${server}/blog/${id}`)
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.blog);
        } else {
          setPost(null);
        }
        // 2) Fetch all posts to pick “related”
        return axios.get(`${server}/blog/get-all-blogs`);
      })
      .then((resAll) => {
        if (resAll.data.success && Array.isArray(resAll.data.blogs)) {
          const others = resAll.data.blogs
            .filter((p) => p._id !== id)
            .slice(0, 3);
          setRelated(others);
        }
      })
      .catch((err) => {
        console.error("Error fetching blog post:", err);
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
        <span>Loading post…</span>
      </div>
    );
  }

  // Not found state
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
        <h2 className="text-2xl mb-4">Post not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <FaArrowLeft /> <span>Back to Blog</span>
        </button>
      </div>
    );
  }

  // Derive values
  const imageUrl =
    post.photos && post.photos.length > 0
      ? post.photos[0].url
      : "/images/fallback.png";

  const formattedDate = new Date(post.createdAt).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .map((para, idx) => <p key={idx}>{para}</p>);

  return (
    <>
      <SEO
        title={`${post.title} | Ananta Technology`}
        description={
          post.excerpt || post.content.slice(0, 160).replace(/\n/g, " ")
        }
        keywords={`Blog, ${post.title}`}
        url={`https://www.anantatechnology.com/blog/${post._id}`}
      />

      <section
        className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-7"
      >
        <div className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20">
          <header className="relative h-[630px] overflow-hidden">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center mt-2 text-gray-200 space-x-2">
                <FaRegCalendarAlt />
                <time>{formattedDate}</time>
              </div>
            </div>
          </header>
        </div>
        <main className="prose prose-lg prose-invert max-w-3xl mx-auto py-16 px-6">
          {paragraphs}
        </main>

        <section className="max-w-3xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r._id}
                to={`/blog/${r._id}`}
                className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={
                    r.photos && r.photos.length > 0
                      ? r.photos[0].url
                      : "/images/fallback.png"
                  }
                  alt={r.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{r.title}</h3>
                  <time className="block text-xs text-gray-500">
                    {new Date(r.createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 pb-16">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
