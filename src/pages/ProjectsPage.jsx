import React from "react"
import PageHeader from "../components/PageHeader"
import { GrProjects } from "react-icons/gr"
// import ProjectSection from "../components/ProjectSection"
import MainFooter from "../components/MainFooter"

const ProjectsPage = () => {
  return (
    <div className="bg-main">
      <PageHeader
        title="Projects"
        icon={<GrProjects />}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Projects" }]}
      />
      {/* <ProjectSection /> */}
      <MainFooter />
    </div>
  )
}

export default ProjectsPage
