import React from "react"
import PageHeader from "../components/PageHeader"
import { FaHome } from "react-icons/fa"
import AboutSection from "../components/AboutSection"
import ClientSection from "../components/ClientSection"
import MainFooter from "../components/MainFooter"
const AboutPage = () => {
  return (
    <div className="bg-main">
      <PageHeader
        title="About Us"
        icon={<FaHome />}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <AboutSection />
      <ClientSection />
      <MainFooter />
    </div>
  )
}

export default AboutPage
