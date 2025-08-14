const TextSection = ({ title, subtitle, classes }) => {
  return (
    <div
      className={`flex flex-col text-white ${
        classes
          ? "items-end text-end max-[768px]:text-start max-[768px]:items-start"
          : "items-start max-[768px]:items-start"
      }`}
    >
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase m-0">
        {title}
      </h1>
      <p className="font-normal text-[14px] w-[400px] max-[768px]:w-full">
        {subtitle}
      </p>
    </div>
  )
}

export default TextSection
