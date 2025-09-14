import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const WebApplication = () => {
  const { t } = useTranslation()
  return <ServicesLayout defaultTitle={t("web_app_development")} />
}

export default WebApplication
