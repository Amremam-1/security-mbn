import Button from "./Button";

const Intro = () => {
  return (
    <section
      className="mt-[50px] max-[450px]:mt-[0px] relative text-white min-h-screen flex flex-col items-center 
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
              stroke="#ffffff"
              strokeWidth="0.3"
            />
            {/* <circle
              cx="400"
              cy="400"
              r="305"
              stroke="#ffffff"
              strokeWidth="0.6"
              // strokeDasharray="5 5"
            /> */}
            {/* <circle
              cx="400"
              cy="400"
              r="260"
              stroke="#ffffff"
              strokeWidth="0.6"
              // strokeDasharray="5 5"
            /> */}
            <circle
              cx="400"
              cy="400"
              r="370"
              stroke="#ffffff"
              strokeWidth="0.3"
            />
            <circle
              cx="400"
              cy="400"
              r="390"
              stroke="#ffffff"
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
        MBN TECHNOLOGY SOLUTIONS: YOUR <br />
        GATEWAY TO COMPLETE DIGITAL INNOVATION
      </h1>

      {/* Description */}
      <p className="mt-6 mb-5 max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed z-10">
        MBN provides end-to-end technology solutions covering all aspects of the
        digital world — from software development, cybersecurity, AI, cloud
        computing, and IoT to digital marketing, automation, and tech
        consulting. We help businesses and individuals transform, secure, and
        grow in the digital age. Future-ready starts here.
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 custom-gradient hover:bg-orange-600 text-white p-2 rounded-full shadow-lg z-20"
      >
        ↑
      </button>

      <Button title="Explore More" />
    </section>
  );
};

export default Intro;
