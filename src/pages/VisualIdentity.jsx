import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const VisualIdentity = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("visual_identity_design")} />
}

export default VisualIdentity
