import React from "react"
import { clients } from "../constants"
import { useTranslation } from "react-i18next"

const ClientSection = () => {
  const { t } = useTranslation()
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <div className="text-center m-auto">
        <h1 className="uppercase text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#f9b44c] to-[#f4911e] bg-clip-text text-transparent">
          {t("clients_title")}
        </h1>
        <p className="text-white opacity-50 mt-1.5 mb-[30px]">
          {t("clients_subtitle")}
        </p>
      </div>

      {/* Clients Images */}
      <div className="flex flex-wrap flex-row justify-center">
        {clients.map((item) => (
          <div className="w-[200px] h-[200px]" key={item.id}>
            <img
              src={item.imgUrl}
              alt=""
              loading="lazy"
              decoding="async"
              className="bg-cover w-[140px] h-[140px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientSection
