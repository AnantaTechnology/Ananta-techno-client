import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    FaBars,
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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Session expiration/auto logout
    useEffect(() => {
        const checkTokenExpiration = () => {
            const expirationTime = localStorage.getItem("token-expiration");
            if (expirationTime && Date.now() >= +expirationTime) {
                toast.error("Session expired. Please log in again.");
                logout(true); // silent, don't toast success
            }
        };
        checkTokenExpiration();
        const intervalId = setInterval(checkTokenExpiration, 30000);
        return () => clearInterval(intervalId);
    }, [navigate]);

    // Logout handler
    const logout = async (isExpired = false) => {
        try {
            await axios.get(`${server}/admin/logout`, { withCredentials: true });
            localStorage.removeItem("Admin-Token");
            localStorage.removeItem("token-expiration");
            if (!isExpired) toast.success("Logged out successfully");
            navigate("/admin");
        } catch (error) {
            toast.error("Failed to log out. Please try again.");
        }
    };

    // Sidebar nav render
    const renderNav = () => (
        <nav className="px-4 pt-4 flex-1 overflow-y-auto">
            {navSections.map((section) => (
                <div key={section.title} className="mb-8">
                    <p className="px-3 text-xs uppercase tracking-wider text-blue-300 mb-2">
                        {section.title}
                    </p>
                    <div className="space-y-1">
                        {section.items.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-colors text-white gap-3
                                        hover:bg-blue-700 ${active ? 'bg-blue-700 font-bold' : 'font-medium'}`}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
            <button
                onClick={() => { setSidebarOpen(false); logout(false); }}
                className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white gap-3 w-full mt-8 transition-colors"
            >
                <FaSignOutAlt /> Logout
            </button>
        </nav>
    );

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* --- Sidebar (desktop) --- */}
            <aside className="hidden md:flex md:flex-col w-64 bg-gradient-to-b from-blue-800 to-blue-900 shadow-xl">
                <div className="flex items-center justify-between px-6 py-6 border-b border-blue-700">
                    <h2 className="text-2xl font-bold text-white">Admin</h2>
                </div>
                {renderNav()}
            </aside>

            {/* --- Mobile sidebar/drawer --- */}
            <div className="md:hidden">
                <button
                    className="absolute top-4 left-4 z-40 text-white bg-blue-800 rounded-lg p-2 shadow-lg"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open Menu"
                >
                    <FaBars size={20} />
                </button>
                {/* Overlay */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-30 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)} />
                )}
                {/* Drawer */}
                <aside className={`fixed top-0 left-0 h-full w-64 z-40 bg-gradient-to-b from-blue-800 to-blue-900 shadow-xl
                    transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex items-center justify-between px-6 py-6 border-b border-blue-700">
                        <h2 className="text-2xl font-bold text-white">Admin</h2>
                        <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
                            <FaTimes size={22} className="text-white" />
                        </button>
                    </div>
                    {renderNav()}
                </aside>
            </div>

            {/* --- Main Content --- */}
            <div className="flex flex-1 flex-col overflow-hidden md:ml-64">
                {/* Header can go here */}
                <main className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-y-auto transition-colors">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
