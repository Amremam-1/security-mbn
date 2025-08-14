import React from "react"
import { Link } from "react-router-dom"

const PageHeader = ({ title, icon, breadcrumb }) => {
  return (
    <div
      className="relative w-full h-[300px] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/assets/ImageHead.jpg')", // صورة الخلفية الثابتة
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-black opacity-55 z-0"></div>
      {/* العنوان */}
      <h1 className="text-4xl font-bold mb-2 flex items-center gap-2 relative z-10">
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h1>

      {/* breadcrumb */}
      <div className="flex items-center gap-2 text-sm relative z-10">
        {breadcrumb?.map((item, index) => (
          <React.Fragment key={index}>
            {item.path ? (
              <Link
                to={item.path}
                className="hover:!text-amber-500 transition duration-300 "
              >
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < breadcrumb.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default PageHeader
