import React from "react"
import PageHeader from "../components/PageHeader"
import { RiContactsFill } from "react-icons/ri"
import ContactSection from "../components/ContactSection"
import MainFooter from "../components/MainFooter"
import GetInTouch from "../components/GetInTouch"

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <PageHeader
        title="Contact Us"
        icon={<RiContactsFill />}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
      <GetInTouch />
      <MainFooter />
    </div>
  )
}

export default ContactPage
