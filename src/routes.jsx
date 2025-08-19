import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import StudyProjectsPage from "./pages/StudyProjectsPage"

import ServicesLayout from "./components/ServicesLayout"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: "/about", element: <AboutPage /> }],
  },
  {
    path: "/project",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: "/project", element: <ProjectsPage /> }],
  },
  {
    path: "/contact",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: "/contact", element: <ContactPage /> }],
  },

  {
    path: "/study-projects",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/study-projects", element: <StudyProjectsPage /> }],
  },
  {
    path: "/:slug",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ServicesLayout defaultTitle="Services" /> },
    ],
  },
])

export default router
