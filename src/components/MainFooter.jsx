import React from "react"
import { Link } from "react-router-dom"
import { IoCallOutline } from "react-icons/io5"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineMailOutline } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaSnapchat } from "react-icons/fa6"
import { CiLinkedin } from "react-icons/ci"
import SpacialCard from "./SpacialCard"
import { navigations, policies } from "../constants"
import useFetchQuery from "../constants/useFetchQuery"
import { useTranslation } from "react-i18next"

const MainFooter = () => {
  const {
    data: Links,
    isLoading,
    error,
  } = useFetchQuery("services", "/services")

  const { t } = useTranslation()

  return (
    <div className="container pt-30 max-[768px]:pt-20">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
        {/* Info */}
        <div className="px-[20px] py-[35px] border-amber-700 border text-white rounded-4xl h-full dark:bg-black bg-[#f9fafb]">
          <Link to="/">
            <img
              src="/assets/Logo.png"
              alt="logo"
              className="w-[100px] m-auto block"
            />
          </Link>

          <span
            className="w-full h-[1px] mt-1.5 mb-5 block"
            style={{
              background:
                "linear-gradient(90deg, #c16e00 0%, #000 49%, #f4911e 100%)",
            }}
          ></span>

          <div className="mb-5">
            <h4 className="text-[15px] text-[#f4911e] font-medium mb-1.5">
              {t("mbn_title")}
            </h4>
            <p className="text-[14px] text-[#6b7280]">{t("mbn_description")}</p>
          </div>

          <div className="flex flex-col">
            <p className="flex gap-5 items-center mb-1.5">
              <IoCallOutline className="text-xl dark:text-white text-[#f4911e]" />
              <span className="text-[13px] text-black dark:text-white">
                920006943
              </span>
            </p>
            <p className="flex gap-5 items-center mb-1.5">
              <IoLocationOutline className="text-xl dark:text-white text-[#f4911e]" />
              <span className="text-[13px] text-black dark:text-white">
                {t("mbn_address")}
              </span>
            </p>
            <p className="flex gap-5 items-center mb-1.5">
              <MdOutlineMailOutline className="text-xl dark:text-white text-[#f4911e]" />
              <span className="text-[13px] text-black dark:text-white">
                info@mahercp.net
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2  border border-amber-700 rounded-full w-fit px-4 py-2">
            <Link className="transition-all duration-300">
              <FaInstagram className="transition-all duration-300 hover:text-amber-600 cursor-pointer dark:text-white text-[#f4911e]" />
            </Link>
            <Link>
              <FaSnapchat className="transition-all duration-300 hover:text-amber-600 cursor-pointer dark:text-white text-[#f4911e]" />
            </Link>
            <Link>
              <CiLinkedin className="transition-all duration-300 hover:text-amber-600 cursor-pointer dark:text-white text-[#f4911e]" />
            </Link>
          </div>
        </div>

        {/* Card Links */}

        <SpacialCard title={t("quick_links")} Links={navigations} />
        <SpacialCard
          title={t("services")}
          Links={Array.isArray(Links) ? Links : []}
          isLoading={isLoading}
          error={error}
        />
        <SpacialCard title={t("legal_policies")} Links={policies} />
      </div>

      <div className="pt-7 pb-4 dark:text-white font-semibold text-center">
        <p>{t("footer_copy")}</p>
      </div>
    </div>
  )
}

export default MainFooter
