import React from "react"

const DonutChart = () => {
  const data = [
    { value: 48, color: "#fbbf24" }, // SMART SYSTEMS
    { value: 17, color: "#f59e0b" }, // AI & AUTOMATION
    { value: 24, color: "#b45309" }, // CYBERSECURITY
  ]
  const radius = 80
  const strokeWidth = 12
  const circumference = 2.02 * Math.PI * radius
  const gapSize = 15
  let offset = 0

  return (
    <div className="flex items-center justify-center relative">
      <svg
        width="320"
        height="320"
        viewBox="0 0 200 200"
        className="rotate-[-90deg]"
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke=""
          strokeWidth={strokeWidth}
        />
        {data.map((segment, index) => {
          const dashArray = (circumference * segment.value) / 100
          const gap = circumference - dashArray
          const circle = (
            <circle
              key={index}
              cx="100"
              cy="100"
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashArray} ${gap}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          )
          offset += dashArray + gapSize // add gap between segments
          return circle
        })}
      </svg>

      {/* Center text */}
      <div className="absolute text-center text-white font-bold text-xl leading-tight">
        HOLISTIC
        <br />
        TECH STRATEGY
      </div>
    </div>
  )
}

export default DonutChart
