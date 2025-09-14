import Button from "./Button"
import { useTranslation } from "react-i18next"

const Intro = () => {
  const { t } = useTranslation()
  return (
    <section
      className="mt-[50px] max-[450px]:mt-[0px] relative text-[#111827]  dark:text-white min-h-screen flex flex-col items-center 
    justify-center text-center px-4 overflow-hidden"
    >
      {/* Rotating Image with Static Circles Around */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-[992px]:hidden">
          <span className="absolute left-0 w-[100px] h-[100px] border border-orange-400 rounded-full animate-up-down"></span>
          <span className="absolute top-10 right-[200px] w-[50px] h-[50px] border border-orange-400 rounded-full animate-up-down"></span>
          <span className="absolute right-[180px] w-[200px] h-[200px] border border-orange-400 rounded-full animate-rh-lf"></span>
          <span className="absolute bottom-0 left-[300px] w-[50px] h-[50px] border border-orange-400 rounded-full animate-rh-lf"></span>
          <span className="absolute top-5 left-[200px] w-[110px] h-[110px] border border-orange-400 rounded-full animate-up-down"></span>
        </div>
        <div className="relative w-[800px] min-h-screen max-[768px]:h-[700px]">
          {/* Static SVG Circles Around Image */}
          <svg
            viewBox="0 0 800 800"
            fill="none"
            className="absolute inset-0 w-full h-full"
          >
            <circle
              cx="400"
              cy="400"
              r="341"
              className="stroke-[#000000] dark:stroke-white"
              strokeWidth="0.3"
            />

            <circle
              cx="400"
              cy="400"
              r="370"
              className="stroke-[#0b0b0b] dark:stroke-white"
              strokeWidth="0.3"
            />
            <circle
              cx="400"
              cy="400"
              r="390"
              className="stroke-[#000000] dark:stroke-white"
              strokeWidth="0.3"
            />
          </svg>

          {/* Rotating Image in the center */}
          <div className="w-full h-full">
            <img
              src="/assets/global.png"
              alt="Rotating Globe"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain animate-spin-slow"
            />
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-5xl z-10">
        {t("hero_title_line1")} <br />
        {t("hero_title_line2")}
      </h1>

      {/* Description */}
      <p className="mt-6 mb-5 max-w-2xl text-sm sm:text-base text-[#000] dark:text-gray-300 leading-relaxed z-10">
        {t("hero_description")}
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 custom-gradient hover:bg-orange-600 text-white p-2 rounded-full shadow-lg z-20"
      >
        ↑
      </button>

      <Button title={t("hero_button")} />
    </section>
  )
}

export default Intro
