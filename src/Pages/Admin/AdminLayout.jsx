import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    FaTimes,
    FaTachometerAlt,
    FaBlog,
    FaSignOutAlt,
} from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../../server';

const navSections = [
    {
        title: 'General',
        items: [
            { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
        ],
    },
    {
        title: 'Content',
        items: [
            { name: 'Blog Section', path: '/admin/blog-post', icon: <FaBlog /> },
        ],
    },
];

const AdminLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Auto-logout
    useEffect(() => {
        const checkExpiry = () => {
            const exp = localStorage.getItem('token-expiration');
            if (exp && Date.now() >= +exp) {
                toast.error('Session expired. Logging out.');
                handleLogout(true);
            }
        };
        checkExpiry();
        const id = setInterval(checkExpiry, 30000);
        return () => clearInterval(id);
    }, []);

    const handleLogout = async (expired = false) => {
        try {
            console.log('Logging out...'); // <--- add this
            await axios.get(`${server}/admin/logout`, { withCredentials: true });
        } catch (err) {
            console.error('Logout error:', err);
        }
        localStorage.removeItem('Admin-Token');
        localStorage.removeItem('token-expiration');
        if (!expired) toast.success('Logged out successfully');
        navigate('/admin');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white shadow-lg transform
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
                    <h2 className="text-xl font-bold">Admin</h2>
                    <button className="md:hidden focus:outline-none" onClick={() => setOpen(false)}>
                        <FaTimes size={20} />
                    </button>
                </div>
                <nav className="mt-6 px-4">
                    {navSections.map((section) => (
                        <div key={section.title} className="mb-6">
                            <p className="px-3 text-xs uppercase tracking-wider text-blue-300">
                                {section.title}
                            </p>
                            <div className="mt-2 space-y-1">
                                {section.items.map((item) => {
                                    const active = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={
                                                `flex items-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors
                        ${active ? 'bg-blue-700 font-semibold' : ''}`
                                            }
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="mr-3 text-lg">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
                <div className="absolute bottom-0 w-full px-4 pb-6">
                    <button
                        onClick={() => handleLogout(false)}
                        className="w-full flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white transition-colors"
                    >
                        <FaSignOutAlt className="mr-3 text-lg" /> Logout
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {open && <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={() => setOpen(false)} />}

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden md:ml-64">
                {/* Header */}
                {/* <header className="flex items-center justify-between bg-white shadow-sm px-6 py-4">
                    <div className="flex items-center">
                        <button className="md:hidden mr-4 text-gray-600 focus:outline-none" onClick={() => setOpen(true)}>
                            <FaBars size={24} />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button className="text-gray-600 focus:outline-none">
                                <FaBell size={20} />
                            </button>
                            <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                3
                            </span>
                        </div>
                        <button className="flex items-center space-x-2 focus:outline-none">
                            <FaUserCircle size={24} className="text-gray-600" />
                            <span className="text-gray-700 font-medium">Admin</span>
                        </button>
                    </div>
                </header> */}

                {/* Content area */}
                <main className="flex-1 overflow-y-auto bg-gray-500 pl-2">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
