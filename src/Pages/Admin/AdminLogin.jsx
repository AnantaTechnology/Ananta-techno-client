import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../../server';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [secretKey, setSecretKey] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const logout = () => {
        localStorage.removeItem("Admin-Token");
        localStorage.removeItem("token-expiration");
        // toast.success("Logged out successfully");
        navigate("/admin");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(`${server}/admin/verify`, { secretKey }, { withCredentials: true });

            if (data.success) {
                const expirationTime = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;// Token expires in 30days
                // Store token and expiration time in both cookies and localStorage

                localStorage.setItem("Admin-Token", expirationTime);
                localStorage.setItem("token-expiration", expirationTime);

                toast.success("Login successful, Welcome Admin!");
                navigate("/admin/dashboard");

                // Set a timeout to log the user out when the token expires
                setTimeout(logout, expirationTime - new Date().getTime());
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Invalid Admin Key");
        } finally {
            setLoading(false);
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

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
