import { useState } from "react"
import { servicesData } from "../constants"
import TextSection from "./TextSection"

const ServiceSection = () => {
  const [active, setActive] = useState(1)
  const handleService = (id) => {
    setActive(id)
    console.log(id)
  }
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title="Services"
        subtitle="Comprehensive digital and IT solutions to empower your business with innovation, security, and creativity."
        classes={true}
      />

      <div className="mt-20 flex items-center gap-2 justify-between max-[768px]:flex-col cursor-pointer">
        {/* Services Links */}
        <div className="flex-1/5 max-[1024px]:flex-2/4 flex gap-3.5 border">
          {/* Vertical Line */}
          <span className="w-[1px] rounded-4xl h-min-screen bg-gray-400 block"></span>

          <ul className="relative">
            {servicesData.map((service) => (
              <li
                key={service.id}
                className="relative group flex mb-5"
                onMouseEnter={() => handleService(service.id)}
              >
                {/* Circle on the line */}
                <div className="absolute -left-[22px] top-[6px]">
                  <div
                    className={`${
                      active === service.id
                        ? "relative flex items-center justify-center w-4 h-4"
                        : ""
                    }`}
                  >
                    {/* Outer white ring (only on hover) */}
                    <span className="absolute w-6 h-6 rounded-full border-[2px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>

                    {/* Inner fixed dot */}
                    <span className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 via-black to-orange-900 z-10"></span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`${
                    active === service.id
                      ? "opacity-100"
                      : "opacity-75 transition-opacity"
                  }  text-white w-[75%] max-[992px]:w-[80%] ml-2`}
                >
                  <h3 className="text-xl font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Left Side */}

        <div className="w-full flex-2/5 max-[1024px]:flex-2/4 relative">
          <img
            src="../../assets/sec-image.png"
            alt=""
            className="w-[600px] h-[400px] max-[768px]:w-[400px] max-[768px]:h-[300px] m-auto rounded-full animate-rh-lf shadow-custom"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
