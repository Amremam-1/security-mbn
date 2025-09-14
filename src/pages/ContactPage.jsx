import React from "react"
import PageHeader from "../components/PageHeader"
import { RiContactsFill } from "react-icons/ri"
import ContactSection from "../components/ContactSection"
import MainFooter from "../components/MainFooter"
import GetInTouch from "../components/GetInTouch"
import { useTranslation } from "react-i18next"

const ContactPage = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white dark:bg-black">
      <PageHeader
        title={t("contact_us")}
        icon={<RiContactsFill />}
        breadcrumb={[
          { label: t("home"), path: "/" },
          { label: t("contact_us") },
        ]}
      />
      <ContactSection />
      <GetInTouch />
      <MainFooter />
    </div>
  )
}

export default ContactPage
