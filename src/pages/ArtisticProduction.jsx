import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"


const ArtisticProduction = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("artistic_production")} />
}

export default ArtisticProduction
