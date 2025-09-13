import { industriesServices } from "../constants"

const CardService = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20">
      {industriesServices.map((item) => (
        <div
          key={item.id}
          className="bg-[#f9fafb] dark:bg-black border-3 border-orange-400 rounded-full py-10 px-16 relative overflow-hidden group"
        >
          <ul className="flex flex-col gap-1.5 items-start text-white cursor-pointer relative z-10">
            <li className="w-15 h-15 rounded-full flex items-center justify-center p-1.5 icon-wrapper relative z-10">
              <span>
                <item.icon className="text-2xl text-[#111827] dark:text-white" />
              </span>
            </li>
            <li className="font-semibold text-xl text-[#111827] dark:text-white">
              {item.titleEn}
            </li>
            <li className="font-normal text-[15px] text-[#6b7280] dark:text-white">
              {item.descriptionEn}
            </li>
          </ul>

          <div className="absolute inset-0 custom-gradient-white dark:custom-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
        </div>
      ))}
    </div>
  )
}

export default CardService
