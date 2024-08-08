import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import AboutPage from "./pages/AboutPage";
import Residential from "./pages/Residential";
import CommunityDevelopment from "./pages/CommunityDevelopment";
import DailyRespite from "./pages/DailyRespite";
import PersonalSupport from "./pages/PersonalSupport";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/residential', element: <Residential /> },
      { path: '/community-development', element: <CommunityDevelopment /> },
      { path: '/daily-respite', element: <DailyRespite /> },
      { path: '/personal-support', element: <PersonalSupport /> },
      
    ]
  }
])

const App = () => {
  return (
    <div className="App overflow-x-hidden min-h-screen">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>


    

    //   <main>
    //     <div id="home">
    //       <Hero />
    //     </div>

    //     <div id="about">
    //       <About />
    //     </div>

    //     <div id="services">
    //       <Services />
    //     </div>

    //     <div id="doctors">
    //       <Doctors />
    //     </div>

    //     <div id="blog">
    //       <Blogs />
    //     </div>
    //   </main>

  );
};

export default App;
