import { buttonPress } from "./sounds.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  buttonPress.play()
  timer.countdown()
}

export function reset() {
  document.documentElement.classList.remove("running")

  timer.restart()
}

export function increment() {
  timer.increment()
}

export function decrement() {
  timer.decrement()
}
