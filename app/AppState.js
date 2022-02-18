import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack('Doritos: Cooler Ranch', 'https://images.freshop.com/00028400010689/e736517b286588d0412d44138dbdd278_large.png', 1.15, 10),
    new Snack('Doritos: Spicy Nacho', 'https://m.media-amazon.com/images/I/81iZ4ltb1-L._SL1500_.jpg', 1.20, 2),
    new Snack('Doritos: Spicy Sweet Chili', 'https://m.media-amazon.com/images/I/91oy9YgYvDL._SL1500_.jpg', 1.45, 1),
    new Snack('Hot wings', 'https://hips.hearstapps.com/hmg-prod/images/classic-buffalo-wings-horizontal-279-1547506077.jpg', 3.00, 4),

  ]
  total = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
