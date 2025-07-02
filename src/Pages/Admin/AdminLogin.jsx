import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { server } from '../../server';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [secretKey, setSecretKey] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem("Admin-Token") || Cookies.get("Admin-Token");
        if (token) {
            navigate("/admin/dashboard");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem("Admin-Token");
        localStorage.removeItem("token-expiration");
        Cookies.remove("Admin-Token");
        navigate("/admin");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!secretKey.trim()) {
            toast.error("Secret key is required");
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post(
                `${server}/admin/verify`,
                { secretKey },
                { withCredentials: true }
            );

            if (data.success) {
                // Token valid for 10 minutes
                const expiresInMs = 10 * 60 * 1000;
                const expirationTime = Date.now() + expiresInMs;

                // Store token
                Cookies.set("Admin-Token", data.token, { expires: expiresInMs / (24 * 60 * 60 * 1000) });
                localStorage.setItem("Admin-Token", data.token);
                localStorage.setItem("token-expiration", expirationTime.toString());

                toast.success("Login successful! Welcome Admin.");
                navigate("/admin/dashboard");

                // Auto-logout
                setTimeout(logout, expiresInMs);
            } else {
                toast.error(data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            toast.error(err.response?.data?.message || "Invalid Admin Key");
        } finally {
            setLoading(false);
        }
    };

    const handleTogglePassword = () => setShowPassword(prev => !prev);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-700 p-4">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-extrabold text-white text-center mb-6">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="secretKey" className="block text-sm font-medium text-white mb-2">
                            Secret Key
                        </label>
                        <input
                            id="secretKey"
                            type={showPassword ? 'text' : 'password'}
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            placeholder="Enter your secret key"
                            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            className="absolute inset-y-0 right-4 top-6 flex align-middle items-center text-white"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg shadow-lg transition disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
