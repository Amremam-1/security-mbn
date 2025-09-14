import React from "react"
import TextSection from "./TextSection"
import CardService from "./CardService"
import { useTranslation } from "react-i18next"

const IndustriesServices = () => {
  const { t } = useTranslation()

  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title={t("industries_title")}
        subtitle={t("industries_subtitle")}
        classes={false}
      />

      <CardService />
    </div>
  )
}

export default IndustriesServices
