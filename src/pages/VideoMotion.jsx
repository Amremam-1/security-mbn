import React from "react"
import ServicesLayout from "../components/ServicesLayout"
import { useTranslation } from "react-i18next"

const VideoMotion = () => {
  const { t } = useTranslation()

  return <ServicesLayout defaultTitle={t("video_motion_graphics")} />
}

export default VideoMotion
