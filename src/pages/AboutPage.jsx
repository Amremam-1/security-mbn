import React from "react"
import PageHeader from "../components/PageHeader"
import { FaHome } from "react-icons/fa"
import AboutSection from "../components/AboutSection"
import ClientSection from "../components/ClientSection"
import MainFooter from "../components/MainFooter"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white dark:bg-black">
      <PageHeader
        title={t("about_us")}
        icon={<FaHome />}
        breadcrumb={[{ label: t("home"), path: "/" }, { label: t("about_us") }]}
      />
      <AboutSection />
      <ClientSection />
      <MainFooter />
    </div>
  )
}

export default AboutPage
