import TextSection from "./TextSection"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Autoplay } from "swiper/modules"
import Button from "./Button"
import { Link } from "react-router-dom"
import useFetchQuery from "../constants/useFetchQuery"

const ProjectSection = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetchQuery("projects", "/projects")

  if (error) return <></>

  return (
    <div className="container pt-30 max-[768px]:pt-20">
      <TextSection
        title="Our Projects"
        subtitle="At MBN, we proudly deliver innovative technology projects for both government and private sectors — including smart systems, artificial intelligence, cybersecurity, and digital transformation."
        classes={false}
      />

      <div className="mt-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            624: {
              slidesPerView: 1,
            },
            325: {
              slidesPerView: 1,
            },
          }}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // توقف عند hover
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {isLoading
            ? //  Skeleton slides
              [...Array(3)].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    role="status"
                    className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                  >
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                    </svg>
                  </div>
                </SwiperSlide>
              ))
            : // Real projects
              projects?.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="group flex flex-col gap-2 text-center justify-center cursor-pointer">
                    {/* الصورة */}
                    <div className="relative w-full h-[230px] bg-main border-2 border-orange-400 rounded-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.en_name}
                        className=" w-full h-full rounded-full"
                      />
                      <button className="absolute bottom-5 left-0 transform -translate-x-full group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-700 z-10 px-5 py-2 rounded-full text-white custom-gradient">
                        <Link
                          to={project.link}
                          className="text-[12px]  font-light"
                        >
                          {project?.service.en_name}
                        </Link>
                      </button>
                      {/* overlay يظهر عند hover على أي مكان في السلايد */}
                      <div className="absolute inset-0 custom-gradient translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0 opacity-60"></div>
                    </div>

                    {/* النص */}
                    <div className="text-white min-h-[110px] max-h-full flex flex-col mt-2">
                      <h2 className="text-xl lg:text-2xl font-semibold">
                        {project.en_name}
                      </h2>
                      <p className="font-normal text-[14px]">
                        {project.en_description}
                      </p>
                    </div>

                    {/* الزرار */}
                    <div className="block">
                      <Button title="Explore More" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProjectSection
