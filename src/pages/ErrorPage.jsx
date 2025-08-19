// src/pages/ErrorPage.jsx
import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>😢 Oops!</h1>
      <p>Something went wrong.</p>
      <p style={{ color: "red" }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
