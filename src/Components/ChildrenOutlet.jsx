import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import UserOption from './UserOption';


const ChildrenOutlet = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <UserOption />
            <Footer />
        </>
    )
}

export default ChildrenOutlet 