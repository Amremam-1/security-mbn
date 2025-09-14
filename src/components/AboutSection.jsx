import React from "react"
import TextSection from "./TextSection"
import { leftItems, rightItems } from "../constants"
import FeatureItem from "./FeatureItem"
import CircleImage from "./CircleImage"
import { useTranslation } from "react-i18next"

const AboutSection = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title={t("about_title")}
        subtitle={t("about_subtitle")}
        classes={false}
      />

      <div className="flex items-center justify-between gap-8 flex-wrap md:flex-nowrap mt-20 not-md:justify-center overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col gap-12">
          {leftItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={i18n.language === "en" ? item.titleEn : item.titleAr}
              description={
                i18n.language === "en" ? item.descriptionEn : item.descriptionAr
              }
              align="right"
            />
          ))}
        </div>

        {/* Center Image */}
        <div
          className="flex-shrink-0"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <CircleImage Url="../../assets/center-image.png" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-12">
          {rightItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={i18n.language === "en" ? item.titleEn : item.titleAr}
              description={
                i18n.language === "en" ? item.descriptionEn : item.descriptionAr
              }
              align="left"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
