import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import Terms from "./Pages/Site/Terms.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import ContactPage from "./Pages/Page/Contact/ContactPage.jsx";
import Dev from "./Pages/Page/Services/Dev.jsx";
import EcomStrategy from "./Pages/Page/Services/EcomStrategy.jsx";
import Smo from "./Pages/Page/Services/Smo.jsx";
import Cms from "./Pages/Page/Services/Cms.jsx";
import FullStackDevelopement from "./Pages/Page/Services/FullStackDevelopement.jsx";
import Learn from "./Pages/Home/Learn.jsx";
import ProjectDetails from "./Pages/Page/Projects/ProjectDetails.jsx";
import UIUXDesign from "./Pages/Page/Services/UIUXDesign.jsx";
import ProjectsPage from "./Pages/Page/Projects/ProjectsPage.jsx";
import AboutPage from "./Pages/Page/About/AboutPage.jsx";
import BlogPost from "./Pages/Page/Blog/BlogPost";
import Blog from "./Pages/Home/Blog.jsx";
import ComputerApp from "./Pages/Page/Services/ComputerApp.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import UserManagement from "./Pages/Admin/UsersManagment.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { Toaster } from "react-hot-toast";
import ChildrenOutlet from "./Components/ChildrenOutlet.jsx";
import BlogSection from "./Pages/Admin/BlogSection.jsx";


const HomeLayout = lazy(() => import("./Components/HomeLayout.jsx"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Privacy = lazy(() => import("./Pages/Site/Privacy.jsx"));
const Policy = lazy(() => import("./Pages/Site/Policy.jsx"));
const Copyright = lazy(() => import("./Pages/Site/Copyright.jsx"));


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>

          <ScrollToTop />
          <Routes>

            <Route element={<ChildrenOutlet />}>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/contact-page" element={<ContactPage />} />
              <Route path="/about-page" element={<AboutPage />} />
              <Route path="/learn-more" element={<Learn />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />


              <Route path="projects/project-details/:id" element={<ProjectDetails />} />
              <Route path="projects/project-page" element={<ProjectsPage />} />

              <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/services/no-code-app-web-development" element={<Dev />} />
              <Route path="/services/ecommerce-strategy" element={<EcomStrategy />} />
              <Route path="/services/social-media-campaigns" element={<Smo />} />
              <Route path="/services/content-management" element={<Cms />} />
              <Route path="/services/full-stack-development" element={<FullStackDevelopement />} />
              <Route path="/services/computer-application-development" element={<ComputerApp />} />



              <Route path="/terms-of-use" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/copyright" element={<Copyright />} />
            </Route>

            {/* admin */}
            <Route path={"/admin"} element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/admin/users-management"
              element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/blog-post"
              element={
                <ProtectedRoute>
                  <BlogSection />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

        </Suspense>
        <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 5000 }} />
      </BrowserRouter>
    </>
  )
}

export default App