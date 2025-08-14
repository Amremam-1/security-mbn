import React from "react"

const Button = ({ title }) => {
  return (
    <button className="btn relative overflow-hidden mt-6 z-10">
      {title}
      <div className="particles absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => {
          const isVertical = i % 2 === 0 // حركات رأسية للزوجي، أفقية للفردي
          return (
            <span
              key={i}
              className={`particle ${isVertical ? "vertical" : "horizontal"}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          )
        })}
      </div>
    </button>
  )
}

export default Button
