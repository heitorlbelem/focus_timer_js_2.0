import timerState from "./state.js"
import * as timerEvents from "./events.js"
import { updateDisplay } from "./timer.js"

export function start(minutes, seconds) {
  timerState.minutes = minutes
  timerState.seconds = seconds

  updateDisplay()

  timerEvents.registerControls()
}
