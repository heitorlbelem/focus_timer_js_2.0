import { toggleMusic } from "./actions.js"
import { soundControls } from "./elements.js"

soundControls.addEventListener("click", (event) => {
  const song = event.target.dataset.song

  toggleMusic(song, event.target)
})
