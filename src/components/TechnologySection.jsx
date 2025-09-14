import { useTranslation } from "react-i18next"
import DonutChart from "./DonutChart"
import TextSection from "./TextSection"
import { techStats } from "../constants/index"

const TechnologySection = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title={
          <>
            {t("projects2_title_line1")} <br /> {t("projects2_title_line2")}
          </>
        }
        subtitle={t("projects2_subtitle")}
        classes={true}
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:w-[80%] w-full">
          {techStats.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-4 items-center justify-between"
            >
              <span
                className="w-[30px] h-[30px] rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>

              <h3 className="uppercase font-semibold text-[#111827] dark:text-white">
                {i18n.language === "en" ? item.titleEn : item.titleAr}
              </h3>

              <span className="flex items-center justify-center px-7 py-1.5 border-amber-600 border rounded-3xl text-[#6b7280] dark:text-white">
                {item.percentage}
              </span>
            </div>
          ))}
        </div>
        {/* Center Content */}
        <div className="">
          <DonutChart />
        </div>
        {/* Right Content */}
        <div className="w-full h-[240px]">
          <div className="w-full h-full border-amber-600 border text-white flex items-center justify-center rounded-full px-4 py-4 text-center overflow-hidden relative">
            <p className="relative z-5 text-[#111827] dark:text-white">
              {t("strategy_description")}
            </p>
            <img
              src="/assets/tach.png"
              alt=""
              className="w-full h-full absolute top-0 right-0 z-0 opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologySection
