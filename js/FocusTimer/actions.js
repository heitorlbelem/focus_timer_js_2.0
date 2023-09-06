import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function increment() {
  timer.increment()
}

export function decrement() {
  timer.decrement()
}