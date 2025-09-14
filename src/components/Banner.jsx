import React from "react"
import Button from "./Button"
import { useTranslation } from "react-i18next"

const Banner = () => {
  const { t } = useTranslation()

  return (
    <section
      style={{ backgroundImage: "url('/assets/banner.jpg')" }}
      className="bg-cover bg-center bg-no-repeat mt-20 py-10"
    >
      <div className="container w-full h-full">
        <div className="flex flex-col items-start max-[768px]:items-center max-[768px]:m-auto text-white w-[70%] max-[768px]:w-full">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase mb-1.5">
            {t("banner_title")}
          </h1>
          <p className="font-medium text-[14px] text-[#6b7280] dark:text-white">
            {t("banner_subtitle")}
          </p>

          <Button title={t("banner_button")} />
        </div>
      </div>
    </section>
  )
}

export default Banner
