import About from "../Pages/Home/About";
import Banner from "../Pages/Home/Banner";
import Projects from "../Pages/Home/Projects";
import Services from "../Pages/Home/Services";
import Blog from "../Pages/Home/Blog";
import DigitalAgencyProcess from "../Pages/Home/Digital";
import SEO from "./SEO";

const HomeLayout = () => {
  return (
    <>
      <SEO
        title="Ananta Technology | Innovative Web & Software Solutions"
        description="Discover our UI/UX Design, No-Code App Development, eCommerce Strategies & Full-Stack Solutions at Ananta Technology."
        keywords={`UI UX design services USA, user interface design agency, UX research consulting, mobile app UX designer, website UX audit services, ecommerce UX design firm, ...`}
        url="https://www.anantatechnology.com/"
        image="https://www.anantatechnology.com/src/assets/Ananta-Technology.png"
        logo="https://www.anantatechnology.com/src/assets/Ananta-Technology.png"
        sameAs={[
          "https://www.linkedin.com/company/anantatechnology",
          "https://github.com/anantatechnology",
          "https://twitter.com/anantatech",
        ]}
      />

      <Banner />
      <About />
      <Services />
      <Projects />
      <DigitalAgencyProcess />
      <Blog />
    </>
  );
};

export default HomeLayout;

// < div className = "min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" >
//   <h1 className="text-5xl font-bold text-white drop-shadow-lg">
//     🚀 Tailwind CSS v4 + React + Vite 💖
//   </h1>
//     </div >
