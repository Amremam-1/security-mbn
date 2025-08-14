import React from "react"
import TextSection from "./TextSection"
import { leftItems, rightItems } from "../constants"
import FeatureItem from "./FeatureItem"
import CircleImage from "./CircleImage"

const AboutSection = () => {
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title="About mbn"
        subtitle="MBN (Maher Bin Naif Al-Harithi Co. for IT Solutions) — Pioneering smart tech and digital 
        innovation to elevate businesses with creative, secure, and future-ready solutions."
        classes={false}
      />

      <div className="flex items-center justify-between gap-8 flex-wrap md:flex-nowrap mt-20 not-md:justify-center">
        {/* Left Side */}
        <div className="flex flex-col gap-12">
          {leftItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              align="right"
            />
          ))}
        </div>

        {/* Center Image */}
        <div className="flex-shrink-0">
          <CircleImage Url="../../assets/center-image.png" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-12">
          {rightItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              align="left"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
