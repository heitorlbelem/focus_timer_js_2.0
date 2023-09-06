import * as elements from "./elements.js"
import state from "./state.js"
import { reset } from "./actions.js"

export function countdown() {
  clearInterval(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds--
  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setInterval(() => countdown(), 1000)
}

export function increment() {
  let minutes = Number(elements.minutes.textContent) + 5
  let seconds = Number(elements.seconds.textContent)

  updateDisplay(minutes, seconds)
}

export function decrement() {
  let minutes = Number(elements.minutes.textContent) - 5
  let seconds = Number(elements.seconds.textContent)

  updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}
