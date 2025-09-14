import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { Link, useLocation } from "react-router-dom"
import { slugify } from "../utils/slugify"
import { useTranslation } from "react-i18next"

const SideBar = ({ setOpenSideBar, navigations, servicesData }) => {
  const location = useLocation()
  const [showServices, setShowServices] = useState(false)

  const { t, i18n } = useTranslation()

  return (
    <div className="px-3 py-4 text-white h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <img src="../../assets/Logo.png" alt="logo" className="w-[100px]" />
        <span
          className="cursor-pointer flex items-center justify-center rounded-full border-2 border-white/10"
          onClick={() => setOpenSideBar(false)}
        >
          <CgClose className="text-2xl p-0.5" />
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-4">
        {navigations.map((link) => {
          const isActive =
            location.pathname === link.path ||
            (link.id === "3" &&
              servicesData?.some(
                (item) => location.pathname === `/${slugify(item.en_name)}`
              ))

          return (
            <li key={link.id}>
              <div>
                <Link
                  to={link.path}
                  className={`block uppercase text-sm font-medium py-2 px-3 rounded 
                    ${
                      isActive ? "bg-gray-700 text-white" : "hover:bg-gray-600"
                    }`}
                  onClick={() => {
                    // لو ده services ميتقفلش Sidebar، بس toggle dropdown
                    if (link.id === "3") {
                      setShowServices(!showServices)
                    } else {
                      setOpenSideBar(false)
                    }
                  }}
                >
                  {i18n.language === "en" ? link.titleEn : link.titleAr}
                </Link>

                {/* Services Dropdown */}
                {link.id === "3" && showServices && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2 bg-gray-800 rounded-lg p-2">
                    {servicesData?.map((item) => {
                      if (!item?.en_name) return null
                      const serviceSlug = `/${slugify(item.en_name)}`
                      const isServiceActive = location.pathname === serviceSlug

                      return (
                        <li key={item.id}>
                          <Link
                            to={serviceSlug}
                            className={`block text-sm px-3 py-1 rounded 
                              ${
                                isServiceActive
                                  ? "bg-gray-600 text-white"
                                  : "hover:bg-gray-700"
                              }`}
                            // خلي الضغط على service يخلي Sidebar مفتوح
                            onClick={() => {}}
                          >
                            {i18n.language === "en"
                              ? item.en_name
                              : item.ar_name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar
