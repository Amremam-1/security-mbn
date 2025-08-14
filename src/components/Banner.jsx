import React from "react"
import Button from "./Button"

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: "url('/assets/banner.jpg')" }}
      className="bg-cover bg-center bg-no-repeat mt-20 py-10"
    >
      <div className="container w-full h-full">
        <div className="flex flex-col items-start max-[768px]:items-center max-[768px]:m-auto text-white w-[70%] max-[768px]:w-full">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase mb-1.5">
            MBN - Empowering Your Business with Advanced IT Solutions
          </h1>
          <p className="font-normal text-[14px]">
            MBN (Maher Bin Naif Al-Harithi Co. for IT Solutions) is a leading
            Saudi company providing integrated digital solutions including
            software development, AI, cybersecurity, IoT, smart systems,
            robotics, and digital marketing. Secure and grow your business with
            our innovative and tailored technologies.
          </p>

          <Button title="Explore Our Services" />
        </div>
      </div>
    </section>
  )
}

export default Banner
