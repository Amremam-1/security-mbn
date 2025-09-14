import { useTranslation } from "react-i18next"
import Form from "./Form"
import TextSection from "./TextSection"

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <div className="container pt-40 max-[768px]:pt-20">
      <TextSection
        title={t("contact_title")}
        subtitle={t("contact_subtitle")}
        classes={true}
      />
      <div className="mt-20 flex justify-between max-[991px]:flex-col">
        {/* Form  */}
        <div className="w-[50%] max-[991px]:w-full">
          <Form />
        </div>
        <div className="w-full flex-2/5 max-[1024px]:flex-2/4 relative">
          <img
            src="../../assets/concatImg.png"
            alt=""
            className="w-[550px] h-[400px] max-[768px]:w-[500px] max-[768px]:h-[300px] rounded-full animate-rh-lf shadow-custom"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
