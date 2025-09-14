import React from "react"

const FeatureItem = ({ title, icon, description, align = "left" }) => {
  return (
    <div
      className={`flex items-center gap-4 relative max-[768px]:flex-col max-[768px]:items-start  ${
        align === "right"
          ? "flex-row-reverse text-right max-[768px]:text-start"
          : ""
      }`}
    >
      <div className="text-white rounded-full p-2 border-1 border-orange-400">
        <span className="text-lg">{icon}</span>
      </div>
      <div
        data-aos={align === "right" ? "fade-right" : "fade-left"}
        data-aos-duration="1500"
        className="max-w-xs"
      >
        <h3 className="font-semibold text-[#111827] dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-[#6b7280]">{description}</p>
      </div>

      <div
        className={`absolute border-t border-dashed border-gray-300 w-30 ${
          align === "right" ? "-end-30" : "-start-30"
        } not-md:hidden`}
      ></div>
    </div>
  )
}

export default FeatureItem
