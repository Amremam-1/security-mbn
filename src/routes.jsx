import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import StudyProjectsPage from "./pages/StudyProjectsPage"
import WebApplication from "./pages/WebApplication"
import VideoMotion from "./pages/VideoMotion"
import DigitalMarketing from "./pages/DigitalMarketing"
import ProductDesign from "./pages/ProductDesign"
import ArtisticProduction from "./pages/ArtisticProduction"
import Robotics from "./pages/Robotics"
import UiuxDesign from "./pages/UiuxDesign"
import VisualIdentity from "./pages/VisualIdentity"
import ServicesLayout from "./components/ServicesLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <Layout />,
    children: [{ index: "/about", element: <AboutPage /> }],
  },
  {
    path: "/project",
    element: <Layout />,
    children: [{ index: "/project", element: <ProjectsPage /> }],
  },
  {
    path: "/contact",
    element: <Layout />,
    children: [{ index: "/contact", element: <ContactPage /> }],
  },

  // {
  //   path: "/study-projects",
  //   element: <Layout />,
  //   children: [{ path: "/study-projects", element: <StudyProjectsPage /> }],
  // },
  // {
  //   path: "/:slug",
  //   element: <Layout />,
  //   children: [
  //     { index: true, element: <ServicesLayout defaultTitle="Services" /> },
  //   ],
  // },
])

export default router
