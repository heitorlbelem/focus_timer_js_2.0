const state = {
  minutes: 0,
  seconds: 0,
  initialMinutes: 0,
  countdownId: null,
  isRunning: false,
}

export function setInitialState(minutes) {
  state.initialMinutes = minutes
  state.minutes = minutes
  state.seconds = 0
}

export function resetState() {
  state.minutes = state.initialMinutes
  state.seconds = 0
  state.isRunning = false
  state.countdownId = null
}

export default state
