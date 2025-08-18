import React from "react"
import { Link } from "react-router-dom"
import { slugify } from "../utils/slugify"

const SpacialCard = ({ title, Links, isLoading, error }) => {
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (isLoading) return <p className="text-gray-400">Loading...</p>

  const hasLinks = Array.isArray(Links) && Links.length > 0

  return (
    <div className="px-[20px] py-[35px] border-amber-700 border rounded-4xl h-full">
      {/* Heading */}
      <div className="text-center uppercase">
        <h1 className="text-white text-xl">{title || "Untitled"}</h1>

        <span
          className="w-full h-[1px] mt-1.5 mb-5 block"
          style={{
            background:
              "linear-gradient(90deg, #c16e00 0%, #000 49%, #f4911e 100%)",
          }}
        ></span>
      </div>

      {/* Links */}
      {hasLinks ? (
        <ul className="flex flex-col text-white">
          {Links.map((item, idx) => (
            <li
              key={item?.id || idx}
              className="relative uppercase text-[13px] font-medium mb-3 transform transition-all duration-300 ease-in-out hover:translate-x-[8px]
              before:content-[''] before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-amber-500 
              before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Link
                to={`/${slugify(item?.path || item?.en_name || "link")}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {item?.titleEn || item?.en_name || "Untitled Link"}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">No links available</p>
      )}
    </div>
  )
}

export default SpacialCard
