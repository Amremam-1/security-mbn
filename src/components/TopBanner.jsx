import { FaBullhorn } from "react-icons/fa"

const TopBanner = () => {
  return (
    <div className="bg-orange-400 text-white text-sm flex items-center justify-center py-3 not-sm:py-2 container clip-banner">
      <FaBullhorn className="mr-2 text-2xl rotate-[-45deg] opacity-70 max-[425px]:text-3xl max-[320px]:text-4xl" />
      <p className="text-center not-sm:text-xs">
        Ready for the Future? Claim Your Free Digital Solutions Consultation –
        Offer Ends Soon!
      </p>
    </div>
  )
}

export default TopBanner
