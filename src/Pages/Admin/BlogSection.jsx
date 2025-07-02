// src/Pages/Admin/BlogSection.jsx

import { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { server } from '../../server';

const BlogSection = () => {
  // State
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef();

  // new: submitting state
  const [submitting, setSubmitting] = useState(false);

  // Fetch all posts
  useEffect(() => {
    let active = true;
    const loadPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${server}/blog/get-all-blogs`);
        if (!active) return;
        if (res.data.success && Array.isArray(res.data.blogs)) {
          setPosts(res.data.blogs);
        } else {
          toast.error('Failed to load posts');
        }
      } catch {
        if (active) toast.error('Failed to load posts');
      } finally {
        if (active) setLoading(false);
      }
    };
    loadPosts();
    return () => { active = false; };
  }, []);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const resetForm = () => {
    setEditingPost(null);
    setTitle('');
    setContent('');
    setImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const openFor = post => {
    if (post) {
      setEditingPost(post);
      setTitle(post.title);
      setContent(post.content);
    } else {
      resetForm();
    }
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    resetForm();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!editingPost && !imageFile) {
      return toast.error('Please select an image');
    }
    if (!title.trim() || !content.trim()) {
      return toast.error('Title and content are required');
    }

    setSubmitting(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (imageFile) formData.append('photos', imageFile);

    try {
      const url = editingPost
        ? `${server}/blog/${editingPost._id}`
        : `${server}/blog/add-blog`;
      const method = editingPost ? 'put' : 'post';
      const res = await axios[method](url, formData);
      if (res.data.success) {
        toast.success(editingPost ? 'Post updated' : 'Post created');
        closeDrawer();
        // Reload posts
        setLoading(true);
        const fresh = await axios.get(`${server}/blog/get-all-blogs`);
        if (fresh.data.success) setPosts(fresh.data.blogs);
      } else {
        toast.error(res.data.message || 'Error saving post');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const handleDelete = async id => {
    if (!confirm('Delete this post?')) return;
    try {
      const res = await axios.delete(`${server}/blog/${id}`);
      if (res.data.success) {
        toast.success('Post deleted');
        setPosts(prev => prev.filter(p => p._id !== id));
      } else {
        toast.error('Delete failed');
      }
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
        {/* Search + Add */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <FaSearch className="text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              disabled={loading || submitting}
              className="w-full sm:w-64 px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200
                         focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            onClick={() => openFor(null)}
            disabled={submitting}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPlus /> <span>Add New Post</span>
          </button>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading…</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(post => (
              <div
                key={post._id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg overflow-hidden transition"
              >
                {post.photos?.[0]?.url && (
                  <img
                    src={post.photos[0].url}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 truncate">
                    {post.title}
                  </h3>
                  <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {post.content}
                  </p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => openFor(post)}
                    disabled={submitting}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full mr-1
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    disabled={submitting}
                    className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Slide-over Drawer Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeDrawer}
        />

        {/* Slide-over Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-800 z-50 transform transition-transform ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {editingPost ? 'Edit Post' : 'Create Post'}
            </h2>
            <button
              onClick={closeDrawer}
              disabled={submitting}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ✕
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-4 overflow-auto h-full"
          >
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                disabled={submitting}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Content
              </label>
              <textarea
                rows="6"
                value={content}
                onChange={e => setContent(e.target.value)}
                disabled={submitting}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Featured Image
              </label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={e => setImageFile(e.target.files[0])}
                disabled={submitting}
                className="mt-1 block w-full text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting
                  ? editingPost
                    ? 'Updating…'
                    : 'Posting…'
                  : editingPost
                  ? 'Update Post'
                  : 'Create Post'}
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                disabled={submitting}
                className="flex-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogSection;
