import { navigations } from "../constants"
import { FaLanguage } from "react-icons/fa"
import { CiDark } from "react-icons/ci"
import { IoSunnySharp } from "react-icons/io5"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link, useLocation } from "react-router-dom"
import useFetchQuery from "../constants/useFetchQuery"
import { useContext, useState } from "react"
import { slugify } from "../utils/slugify"
import { CgMenu } from "react-icons/cg"
import SideBar from "./SideBar"
import ThemeContext from "./ThemeContext"

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openSideBar, setOpenSideBar] = useState(false)
  const { data: servicesData, isLoading } = useFetchQuery(
    "services",
    "/services"
  )

  if (isLoading) return <p>Loading..</p>

  return (
    <div className="px-5 bg-white dark:bg-black">
      <div className="flex items-center justify-between h-[70px] text-[#111827] dark:text-white">
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
                  servicesData?.some(
                    (item) => location.pathname === `/${slugify(item.en_name)}`
                  ))

              return (
                <li
                  key={link.id}
                  className={`mr-6 uppercase text-xs font-semibold max-[850px]:hidden block text-[#111827] dark:text-white 
                    ${
                      link.id === "6"
                        ? "custom-gradient-white dark:custom-gradient py-2 px-1.5 rounded-xl "
                        : ""
                    }
                    ${
                      isActive
                        ? "relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full dark:before:bg-white before:bg-amber-500"
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
                        <IoMdArrowDropdown className="dark:text-white text-xl" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.id === "3" &&
                      openDropdown &&
                      Array.isArray(servicesData) && (
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-[#f9fafb] dark:bg-black dark:text-white text-[#111827] rounded-lg shadow-lg p-2">
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
            <div className="hidden max-[850px]:block">
              <span
                onClick={() => setOpenSideBar(!openSideBar)}
                className="cursor-pointer"
              >
                <CgMenu className="text-2xl dark:text-white text-[#111827]" />
              </span>
            </div>
          </ul>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 text-2xl cursor-pointer text-[#111827] dark:text-white">
          <FaLanguage />

          <div onClick={toggleDarkMode}>
            {darkMode ? (
              <CiDark className="dark:text-lightText  text-xl" />
            ) : (
              <IoSunnySharp className="dark:text-lightText text-xl" />
            )}
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ease-in-out
    ${openSideBar ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setOpenSideBar(false)} // كليك برة يقفل
        ></div>

        {/* SideBar */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] z-30 
  rounded-l-2xl bg-[#1e1e1e] border-l border-white/10 
  transform transition-transform duration-300 ease-in-out 
  shadow-2xl shadow-black/50
  ${openSideBar ? "translate-x-0" : "translate-x-full"}`}
        >
          <SideBar
            setOpenSideBar={setOpenSideBar}
            navigations={navigations}
            servicesData={servicesData}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
