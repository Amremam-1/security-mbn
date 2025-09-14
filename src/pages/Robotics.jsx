import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const Robotics = () => {
  const { t } = useTranslation()
  return <ServicesLayout defaultTitle={t("robotics")} />
}

export default Robotics
