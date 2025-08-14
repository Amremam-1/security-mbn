import React from "react"
import NavBar from "./NavBar"
import TopBanner from "./TopBanner"
import useScrollPosition from "../Hooks/useScrollPosition"
import { Outlet } from "react-router-dom"

const Layout = () => {
  const isScrolled = useScrollPosition(10)
  return (
    <div className="bg-main">
      <TopBanner />
      <div
        className={`fixed left-0 w-full z-50 border-none transition-all duration-300 ${
          isScrolled ? "top-0" : "top-[45px]"
        }`}
      >
        <NavBar />
      </div>
      <div id="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
