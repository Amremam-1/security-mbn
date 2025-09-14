import { useTranslation } from "react-i18next"
import { FaBullhorn } from "react-icons/fa"

const TopBanner = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-orange-400 text-[#111827] dark:text-white text-sm flex items-center justify-center py-3 not-sm:py-2 container clip-banner">
      <FaBullhorn className="mx-2 text-2xl rotate-[-45deg] opacity-70 max-[425px]:text-3xl max-[320px]:text-4xl" />
      <p className="text-center not-sm:text-xs">{t("promo_text")}</p>
    </div>
  )
}

export default TopBanner
