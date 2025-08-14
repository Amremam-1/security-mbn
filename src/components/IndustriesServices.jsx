import React from "react"
import TextSection from "./TextSection"
import CardService from "./CardService"

const IndustriesServices = () => {
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title="Industries Served"
        subtitle="MBN delivers cutting-edge digital solutions to a wide range of industries including government, education, finance, healthcare, retail, and small businesses — empowering them with secure, smart, and innovative technologies tailored to their specific needs."
        classes={false}
      />

      <CardService />
    </div>
  )
}

export default IndustriesServices
