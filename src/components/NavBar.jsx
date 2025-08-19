import { navigations } from "../constants"
import { FaLanguage } from "react-icons/fa"
import { CiDark } from "react-icons/ci"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link, useLocation } from "react-router-dom"
import useFetchQuery from "../constants/useFetchQuery"
import { useState } from "react"
import { slugify } from "../utils/slugify"

const NavBar = () => {
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState(false)
  const { data: servicesData, isLoading } = useFetchQuery(
    "services",
    "/services"
  )

  if (isLoading) return <></>

  return (
    <div className="container bg-main">
      <div className="flex items-center justify-between h-[70px] text-white">
        {/* Logo */}
        <Link to="/" className="">
          <img src="/assets/Logo.png" alt="logo" />
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center relative">
            {navigations.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.id === "3" &&
                  Array.isArray(servicesData) &&
                  servicesData.some(
                    (item) =>
                      location.pathname === `/${slugify(item?.en_name || "")}`
                  ))

              return (
                <li
                  key={link.id}
                  className={`mr-6 uppercase text-xs font-medium max-[769px]:hidden block
                    ${
                      link.id === "6"
                        ? "custom-gradient py-2 px-1.5 rounded-xl"
                        : ""
                    }
                    ${
                      isActive
                        ? "relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-white"
                        : ""
                    }
                  `}
                >
                  <div
                    className="flex items-center cursor-pointer relative"
                    onMouseEnter={() =>
                      link.id === "3" && setOpenDropdown(true)
                    }
                    onMouseLeave={() =>
                      link.id === "3" && setOpenDropdown(false)
                    }
                  >
                    <Link to={link.path} className="flex items-center">
                      {link.titleEn}
                      {link.id === "3" && (
                        <IoMdArrowDropdown className="text-white text-xl" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.id === "3" &&
                      openDropdown &&
                      Array.isArray(servicesData) && (
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-black text-white rounded-lg shadow-lg p-2">
                          {servicesData?.map((item) => {
                            if (!item?.en_name) return null
                            const serviceSlug = `/${slugify(item.en_name)}`
                            const isServiceActive =
                              location.pathname === serviceSlug

                            return (
                              <li
                                key={item.id}
                                className={`px-3 py-2 rounded ${
                                  isServiceActive
                                    ? "bg-gray-200 text-black"
                                    : "hover:bg-gray-200 hover:text-black"
                                }`}
                              >
                                <Link to={serviceSlug}>{item.en_name}</Link>
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
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 text-2xl cursor-pointer">
          <FaLanguage />
          <CiDark />
        </div>
      </div>
    </div>
  )
}

export default NavBar
