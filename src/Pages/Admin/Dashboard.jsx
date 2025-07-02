import { useState, useEffect, useRef } from 'react';
import AdminLayout from './AdminLayout';
import moment from 'moment';
import {
    FaBell,
    FaBlog,
    FaComments,
    FaEye,
    FaHistory,
    FaMoon,
    FaSun
} from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { getLast7Days } from '../../libs/features';
import { purple, purpleLight } from './constants/color';
import { server } from '../../server';

// Chart.js setup
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// helper to fetch stats
const fetchStats = async () => {
    const res = await axios.get(`${server}/admin/stats`, {
        withCredentials: true
    });
    return res.data.stats;
};

export default function Dashboard() {
    // Theme toggle
    const [dark, setDark] = useState(
        () => localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.theme = dark ? 'dark' : 'light';
    }, [dark]);

    // Notifications dropdown
    const [openNotif, setOpenNotif] = useState(false);
    const notifRef = useRef();

    useEffect(() => {
        const close = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setOpenNotif(false);
            }
        };
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, []);

    // Fetch data
    const { data: stats, isLoading } = useQuery({
        queryKey: ['adminStats'],
        queryFn: fetchStats,
        refetchInterval: 60_000,
        staleTime: 30_000,
        placeholderData: {
            blogCount: 0,
            commentsCount: 0,
            viewsChart: Array(7).fill(0),
            recentPosts: [],
            activity: []
        }
    });

    const {
        blogCount = 0,
        commentsCount = 0,
        viewsChart = [],
        recentPosts = [],
        activity = []
    } = stats || {};

    const totalViews = viewsChart.reduce((a, v) => a + (v.value ?? v), 0);
    const labels = getLast7Days();

    const lineData = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: viewsChart.map((v) => v.value ?? v),
                fill: true,
                backgroundColor: purpleLight,
                borderColor: purple,
                tension: 0.3
            }
        ]
    };
    const lineOpts = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true, grid: { display: false } }
        }
    };

    return (
        <AdminLayout>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
                {/* HEADER */}
                
                <header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                            Blog CRM Dashboard
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {isLoading
                                ? 'Loading...'
                                : `Updated ${moment().format('MMMM Do YYYY, h:mm A')}`}
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme toggle */}
                        <button
                            onClick={() => setDark((d) => !d)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>

                        {/* Notifications */}
                        <div className="relative" ref={notifRef}>
                            <button
                                onClick={() => setOpenNotif((o) => !o)}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            >
                                <FaBell size={18} />
                                {(recentPosts.length + activity.length) > 0 && (
                                    <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 bg-red-500 text-white text-xs rounded-full items-center justify-center">
                                        {recentPosts.length + activity.length}
                                    </span>
                                )}
                            </button>
                            {openNotif && (
                                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10">
                                    <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                                        <strong className="text-gray-700 dark:text-gray-200">
                                            Notifications
                                        </strong>
                                    </div>
                                    <ul className="max-h-60 overflow-y-auto">
                                        {recentPosts.map((p) => (
                                            <li
                                                key={p._id}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                                            >
                                                <FaBlog className="text-blue-500" />
                                                <span className="text-sm truncate dark:text-gray-200">
                                                    New post: {p.title}
                                                </span>
                                            </li>
                                        ))}
                                        {activity.map((act, i) => (
                                            <li
                                                key={i}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                                            >
                                                <FaHistory className="text-indigo-500" />
                                                <span className="text-sm truncate dark:text-gray-200">
                                                    {act.action}: {act.title}
                                                </span>
                                            </li>
                                        ))}
                                        {!recentPosts.length && !activity.length && (
                                            <li className="px-4 py-2 text-gray-500 dark:text-gray-400">
                                                No notifications
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* METRICS */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                    <StatCard
                        icon={<FaBlog size={24} />}
                        label="Total Blogs"
                        value={blogCount}
                        gradient="from-blue-400 to-blue-600"
                    />
                    <StatCard
                        icon={<FaComments size={24} />}
                        label="Comments"
                        value={commentsCount}
                        gradient="from-green-400 to-green-600"
                    />
                    <StatCard
                        icon={<FaEye size={24} />}
                        label="Total Views"
                        value={totalViews}
                        gradient="from-purple-400 to-purple-600"
                    />
                    <StatCard
                        icon={<FaHistory size={24} />}
                        label="New Posts (7d)"
                        value={recentPosts.length}
                        gradient="from-indigo-400 to-indigo-600"
                    />
                </section>

                {/* ANALYTICS + POSTS + ACTIVITY */}
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-8">
                    {/* Views Chart */}
                    <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-xl p-6 col-span-2">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Views Over Last 7 Days
                        </h2>
                        <Line data={lineData} options={lineOpts} />
                    </div>

                    {/* Recent Posts */}
                    <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-xl p-6 h-[40vh] overflow-auto">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Recent Posts
                        </h2>
                        <ul className="space-y-3">
                            {recentPosts.map((p) => (
                                <li
                                    key={p._id}
                                    className="flex justify-between items-center text-gray-700 dark:text-gray-200"
                                >
                                    <span className="truncate">{p.title}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {moment(p.createdAt).fromNow()}
                                    </span>
                                </li>
                            ))}
                            {!recentPosts.length && (
                                <p className="text-gray-500 dark:text-gray-400">
                                    No recent posts.
                                </p>
                            )}
                        </ul>
                    </div>

                    {/* Activity Feed */}
                    <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-xl p-6 h-[40vh] overflow-auto">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Activity Feed
                        </h2>
                        <ul className="space-y-4 relative">
                            {activity.map((act, i) => (
                                <li key={i} className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        {i < activity.length - 1 && (
                                            <div className="w-px h-full bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-200">
                                            <span className="font-semibold">{act.user}</span>{' '}
                                            {act.action} <span className="italic">{act.title}</span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {moment(act.date).fromNow()}
                                        </p>
                                    </div>
                                </li>
                            ))}
                            {!activity.length && (
                                <p className="text-gray-500 dark:text-gray-400">
                                    No recent activity.
                                </p>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

// StatCard component
function StatCard({ icon, label, value, gradient }) {
    return (
        <div
            className={`flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-br ${gradient} hover:scale-[1.02] transition-transform`}
        >
            <div className="p-3 bg-white/20 rounded-full">{icon}</div>
            <div className="ml-4">
                <p className="text-sm uppercase">{label}</p>
                <p className="text-2xl font-bold mt-1">{value}</p>
            </div>
        </div>
    );
}
