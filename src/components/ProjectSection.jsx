import TextSection from "./TextSection"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Autoplay } from "swiper/modules"
import { projects } from "../constants"
import Button from "./Button"
import { Link } from "react-router-dom"

const ProjectSection = () => {
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
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group flex flex-col gap-2 text-center justify-center cursor-pointer">
                {/* الصورة */}
                <div className="relative bg-main border-3 border-orange-400 rounded-full overflow-hidden">
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-5 left-0 transform -translate-x-full group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-700 z-10 px-20 py-2 rounded-full text-white custom-gradient">
                    <Link to="">Path</Link>
                  </button>
                  {/* overlay يظهر عند hover على أي مكان في السلايد */}
                  <div className="absolute inset-0 custom-gradient translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0 opacity-60"></div>
                </div>

                {/* النص */}
                <div className="text-white min-h-[110px] max-h-full flex flex-col mt-2">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="font-normal text-[14px]">{project.subtitle}</p>
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
