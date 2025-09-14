import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const DigitalMarketing = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("digital_marketing")} />
}

export default DigitalMarketing
