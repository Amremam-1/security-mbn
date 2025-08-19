import React, { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import { FaHome } from "react-icons/fa"
import MainFooter from "../components/MainFooter"
import useFetchQuery from "../constants/useFetchQuery"
import Button from "../components/Button"
import { Link, useParams } from "react-router-dom"
import { slugify } from "../utils/slugify"

const ServicesLayout = ({ defaultTitle }) => {
  const { slug } = useParams()
  const { data, isLoading, error } = useFetchQuery("services", "/services")
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      if (slug) {
        const matched = data.find((item) => slugify(item?.en_name) === slug)
        setActiveItem(matched || data[0])
      } else {
        setActiveItem(data[0])
      }
    }
  }, [data, slug])

  if (isLoading) return <p className="bg-main min-h-screen">Loading...</p>
  if (error) return <p className="bg-main min-h-screen">Error fetching data</p>
  if (!Array.isArray(data) || data.length === 0)
    return (
      <p className="bg-main min-h-screen text-white">No services available</p>
    )

  return (
    <div className="bg-main min-h-screen flex flex-col">
      {/* PageHeader */}
      <PageHeader
        title={activeItem ? activeItem.en_name : defaultTitle}
        icon={<FaHome />}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: activeItem ? activeItem.en_name : defaultTitle },
        ]}
      />

      {/* Content */}
      <div className="flex flex-1 container py-10 gap-6 lg:flex-row flex-col">
        {/* Sidebar */}
        <div className="sm:w-full md:w-[60%] lg:w-1/4 flex flex-col gap-4 mx-auto">
          {Array.isArray(data) &&
            data.map((item) => (
              <button
                key={item?.id}
                onClick={() => setActiveItem(item)}
                className={`p-3 text-center rounded-lg shadow-custom ${
                  activeItem?.id === item?.id
                    ? "custom-gradient text-white"
                    : "bg-transparent text-white"
                }`}
              >
                {item?.en_name || "Untitled"}
              </button>
            ))}
        </div>

        {/* Details */}
        <div className="lg:w-3/4 md:w-full lg:p-6 md:p-2">
          {/* {activeItem && (
            <div className="text-white">
              <div className="w-full h-full">
                <img
                  src={activeItem?.image}
                  alt={activeItem?.en_name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-2xl font-bold mb-4">
                  {activeItem?.en_name}
                </h2>
                <p>
                  {activeItem?.en_description || "No description available"}
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">The Tools</h3>
                <ul className="list-disc list-inside space-y-2">
                  {(() => {
                    try {
                      if (typeof activeItem?.tools !== "string") return null
                      const toolsArray = JSON.parse(activeItem.tools)
                      if (!Array.isArray(toolsArray)) return null
                      return toolsArray.map((tool, index) => (
                        <li
                          key={index}
                          className="text-white font-medium text-xl"
                        >
                          • {tool}
                        </li>
                      ))
                    } catch {
                      return null
                    }
                  })()}
                </ul>

                <Link to="/contact">
                  <Button title="Contact Us" />
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}

export default ServicesLayout
