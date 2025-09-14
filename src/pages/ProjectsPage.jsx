import React from "react"
import PageHeader from "../components/PageHeader"
import { GrProjects } from "react-icons/gr"
import ProjectSection from "../components/ProjectSection"
import MainFooter from "../components/MainFooter"
import { useTranslation } from "react-i18next"

const ProjectsPage = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white dark:bg-black">
      <PageHeader
        title={t("projects")}
        icon={<GrProjects />}
        breadcrumb={[{ label: t("home"), path: "/" }, { label: t("projects") }]}
      />
      <ProjectSection />
      <MainFooter />
    </div>
  )
}

export default ProjectsPage
