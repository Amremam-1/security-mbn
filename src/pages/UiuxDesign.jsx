import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const UiuxDesign = () => {
  const { t } = useTranslation()

  return (
    <ServicesLayout defaultTitle={t("uiux_design")} />
  )
}

export default UiuxDesign
