const TextSection = ({ title, subtitle, classes }) => {
  return (
    <div
      className={`flex flex-col ${
        classes
          ? "items-end text-end max-[768px]:text-start max-[768px]:items-start"
          : "items-start max-[768px]:items-start"
      }`}
    >
      <h1
        data-aos={classes ? "fade-right" : "fade-left"}
        className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase m-0 text-[#111827] dark:text-white"
      >
        {title}
      </h1>
      <p
        data-aos={classes ? "fade-right" : "fade-left"}
        className="font-normal text-[14px] w-[400px] max-[768px]:w-full text-[#6b7280]"
      >
        {subtitle}
      </p>
    </div>
  )
}

export default TextSection
