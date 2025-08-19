import React from "react"
import Intro from "../components/Intro"
import AboutSection from "../components/AboutSection"
import ServiceSection from "../components/ServiceSection"
import IndustriesServices from "../components/IndustriesServices"
import Banner from "../components/Banner"
import ProjectSection from "../components/ProjectSection"
import TechnologySection from "../components/TechnologySection"
import ClientSection from "../components/ClientSection"
import ContactSection from "../components/ContactSection"
import MainFooter from "../components/MainFooter"

const Home = () => {
  return (
    <div>
      <Intro />
      <AboutSection />
      <ServiceSection />
      <IndustriesServices />
      <Banner />
      <ProjectSection />
      <TechnologySection />
      <ClientSection />
      <ContactSection />
      <MainFooter />
    </div>
  )
}

export default Home
