import getSchwifty from "../../audio/get-schwifty.mp3"
import useSound from "use-sound"
import "./Audio.css"

function Audio() {
  const [play] = useSound(getSchwifty)
  return (
    <button className="schwifty-button" onClick={play}>
      Get Schwifty!
    </button>
  )
}

export default Audio
