import DonutChart from "./DonutChart"
import TextSection from "./TextSection"

const TechnologySection = () => {
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title={
          <>
            Beyond Technology — Powered <br /> by MBN
          </>
        }
        subtitle="At MBN, we go beyond innovation — delivering integrated tech solutions that empower businesses and shape the future."
        classes={true}
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:w-[80%] w-full">
          <div className="flex flex-row gap-4 items-center text-white justify-between">
            <span className="w-[30px] h-[30px] bg-[#f9b44c] rounded-full"></span>
            <h3 className="uppercase font-semibold">Smart Systems</h3>
            <span className="flex items-center justify-center px-7 py-1.5 border-amber-600 border rounded-3xl">
              47%
            </span>
          </div>
          <div className="flex flex-row gap-4 items-center text-white justify-between">
            <span className="w-[30px] h-[30px] bg-[#f4911e] rounded-full"></span>
            <h3 className="uppercase font-semibold">
              AI &<br /> Automation
            </h3>
            <span className="flex items-center justify-center px-7 py-1.5 border-amber-600 border rounded-3xl">
              17%
            </span>
          </div>
          <div className="flex flex-row gap-4 items-center text-white justify-between">
            <span className="w-[30px] h-[30px] bg-[#c16e00] rounded-full"></span>
            <h3 className="uppercase font-semibold">Cybersecurity</h3>
            <span className="flex items-center justify-center px-7 py-1.5 border-amber-600 border rounded-3xl">
              24%
            </span>
          </div>
        </div>
        {/* Center Content */}
        <div className="">
          <DonutChart />
        </div>
        {/* Right Content */}
        <div className="w-full h-[240px]">
          <div className="w-full h-full border-amber-600 border text-white flex items-center justify-center rounded-full px-4 py-4 text-center overflow-hidden relative">
            <p className="relative z-5">
              MBN is redefining what’s possible. Our approach combines
              innovation, intelligence, and infrastructure to deliver end-to-end
              digital solutions. From AI-powered systems to robust cybersecurity
              and scalable automation — we build tech that grows with you.
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
