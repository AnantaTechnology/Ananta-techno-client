
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2 text-center max-w-md">
                Sorry, the page {"you're"} looking for {"doesn't"} exist. You can go back to the home page.
            </p>
            <Link to="/">
                {/* <Button className="mt-6 px-6 py-3 text-lg font-medium rounded-lg shadow-md">Go Home</Button> */}
                <button
                    type="submit"
                    className="mt-6 px-6 py-3 text-lg font-medium rounded-lg shadow-md"
                >
                    Go Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;