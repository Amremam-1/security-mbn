import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

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
])

export default router
