import Intro from "./components/Intro"
import NavBar from "./components/NavBar"
import TopBanner from "./components/TopBanner"
import useScrollPosition from "./Hooks/useScrollPosition"

const App = () => {
  const isScrolled = useScrollPosition(10)

  return (
    <div className="bg-main">
      <TopBanner />
      <div className="relative">
        <div
          className={`fixed left-0 w-full z-50 border-none transition-all duration-300 ${
            isScrolled ? "top-0" : "top-[45px]"
          }`}
        >
          <NavBar />
        </div>
        <Intro />
      </div>
    </div>
  )
}

export default App
