import { soundControls } from "./elements.js"
import state from "./state.js"

const AVAILABLE_SONGS = ["tree", "rain", "fire", "store"]

export function toggleMusic(song, target) {
  if (!AVAILABLE_SONGS.includes(song)) return

  if (state.active !== null) {
    state.active.pause()

    if (state.active.src.includes(song)) {
      state.active = null
      target.classList.remove("selected")

      return
    }
  }

  changeActiveSong(song, target)
}

function changeActiveSong(song, target) {
  const oldSelectedButton = soundControls.querySelector("button.selected")
  oldSelectedButton?.classList.toggle("selected")

  state.active = new Audio(`../assets/${song}.wav`)
  state.active.play()
  state.active.loop = true
  target.classList.add("selected")
}
