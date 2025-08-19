import Form from "./Form"
import TextSection from "./TextSection"

const ContactSection = () => {
  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title="Contact Us"
        subtitle="We provide cutting-edge cybersecurity solutions to protect businesses from evolving digital threats."
        classes={true}
      />
      <div className="mt-20 flex justify-between max-[768px]:flex-col">
        {/* Form  */}
        <div className="w-[50%] max-[768px]:w-full">
          <Form />
        </div>
        <div className="w-full flex-2/5 max-[1024px]:flex-2/4 relative">
          <img
            src="../../assets/concatImg.png"
            alt=""
            className="w-[600px] h-[400px] max-[768px]:w-[500px] max-[768px]:h-[300px] m-auto rounded-full animate-rh-lf shadow-custom"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
