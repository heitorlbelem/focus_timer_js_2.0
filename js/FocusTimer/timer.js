import state, { resetState } from "./state.js"

import * as elements from "./elements.js"

export function countdown() {
  clearInterval(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = state.minutes
  let seconds = state.seconds

  seconds--
  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    return
  }

  state.minutes = minutes
  state.seconds = seconds
  updateDisplay()

  state.countdownId = setInterval(() => countdown(), 1000)
}

export function restart() {
  clearInterval(state.countdownId)
  resetState()
  updateDisplay()
}

export function increment() {
  let minutes = state.minutes + 5

  if (minutes > 60) return

  state.minutes = minutes

  updateDisplay(minutes, seconds)
}

export function decrement() {
  let minutes = state.minutes - 5

  if (minutes < 0) return

  state.minutes = minutes

  updateDisplay()
}

export function updateDisplay() {
  let minutes = state.minutes
  let seconds = state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}
