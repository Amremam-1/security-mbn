import { useState, useEffect } from "react"

const useScrollPosition = (threshold) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handelScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handelScroll)

    return () => window.removeEventListener("scroll", handelScroll)
  }, [threshold])

  return isScrolled
}

export default useScrollPosition
