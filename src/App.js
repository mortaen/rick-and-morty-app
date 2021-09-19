import { useState } from "react"
import "./App.css"
import Audio from "./components/Audio/Audio"
import trippyImg from "./img/trippy-overlay.gif"

function App({ data }) {
  const rickSanchez = data.find((el) => el.id === 1)

  // fear-and-loathing-overlay
  const [overlay, setOverlay] = useState("")

  function handleImageClick(input) {
    input !== overlay ? setOverlay(input) : setOverlay("")
  }

  return (
    <div className="App">
      <main className="main">
        <section
          className="fear-and-loathing-section"
          onClick={() => handleImageClick("fearOverlay")}
        >
          {overlay === "fearOverlay" ? (
            <img className="fear-overlay" src={trippyImg} alt="trippy gif" />
          ) : (
            ""
          )}
        </section>
        <section className="heads-section">
          <Audio />
          <img
            src={rickSanchez.image}
            className="rick-image"
            alt="Rick Sanchez"
          />
        </section>
        <section className="mib-section"></section>
      </main>
    </div>
  )
}

export default App
