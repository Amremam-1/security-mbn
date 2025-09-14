import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const StudyProjectsPage = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("study_projects")} />
}

export default StudyProjectsPage
