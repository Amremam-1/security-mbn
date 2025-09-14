import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const ProductDesign = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("product_design")} />
}

export default ProductDesign
