import React, { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import { FaHome } from "react-icons/fa"
import MainFooter from "../components/MainFooter"
import useFetchQuery from "../constants/useFetchQuery"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { slugify } from "../utils/slugify"

const ServicesLayout = ({ defaultTitle }) => {
  const { slug } = useParams()
  const { data, isLoading, error } = useFetchQuery("services", "/services")
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (data && data?.length > 0) {
      if (slug) {
        // لو فيه slug في URL اعرض الخدمة المناسبة
        const matched = data?.find((item) => slugify(item.en_name) === slug)
        setActiveItem(matched || data[0])
      } else {
        // لو مفيش slug اعرض أول خدمة
        setActiveItem(data[0])
      }
    }
  }, [data, slug])
  if (isLoading) return <p className="bg-main min-h-screen"></p>
  if (error) return <p className="bg-main min-h-screen">Error fetching data</p>

  return (
    <div className="bg-main min-h-screen flex flex-col">
      {/* PageHeader ثابت */}
      <PageHeader
        title={activeItem ? activeItem.en_name : defaultTitle}
        icon={<FaHome />}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: activeItem ? activeItem.en_name : defaultTitle },
        ]}
      />

      {/* محتوى الصفحة */}
      <div className="flex flex-1 container py-10 gap-6 lg:flex-row flex-col">
        {/* Sidebar */}
        <div className="sm:w-full md:w-[60%] md:mx-auto lg:mx-auto lg:w-1/4 flex flex-col gap-4">
          {data?.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`p-3 text-center  rounded-lg shadow-custom ${
                activeItem?.id === item.id
                  ? "custom-gradient text-white"
                  : "bg-transparent  text-white "
              }`}
            >
              {item.en_name}
            </button>
          ))}
        </div>

        {/* التفاصيل */}
        <div className="lg:w-3/4 md:w-full lg:p-6 md:p-2">
          {activeItem && (
            <div className="text-white">
              <div className="w-full h-full">
                <img
                  src={activeItem.image}
                  alt={activeItem.en_name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-2xl font-bold mb-4">
                  {activeItem.en_name}
                </h2>
                <p>{activeItem.en_description}</p>

                <h3 className="text-xl font-bold mt-6 mb-2">The Tools</h3>
                <ul className="list-disc list-inside space-y-2">
                  {Array.isArray(JSON.parse(activeItem?.tools || "[]")) &&
                    JSON.parse(activeItem.tools || "[]").map((tool, index) => (
                      <li
                        key={index}
                        className="text-white font-medium text-xl"
                      >
                        • {tool}
                      </li>
                    ))}
                </ul>

                <Link to="/contact">
                  <Button title="Contact Us" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer ثابت */}
      <MainFooter />
    </div>
  )
}

export default ServicesLayout
