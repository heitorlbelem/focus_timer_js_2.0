import { setInitialState } from "./state.js"
import * as timerEvents from "./events.js"
import { updateDisplay } from "./timer.js"

export function start(minutes) {
  setInitialState(minutes)

  updateDisplay()

  timerEvents.registerControls()
}
