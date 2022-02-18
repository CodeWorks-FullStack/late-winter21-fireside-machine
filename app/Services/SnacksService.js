import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

class SnacksService {
  buySnack(id) {
    const snack = ProxyState.snacks.find(s => s.id == id)
    if (ProxyState.total >= snack.price && snack.quantity) {
      ProxyState.total -= snack.price
      snack.quantity--
      // triggers the draw after manipulating nested data
      ProxyState.snacks = ProxyState.snacks
    } else {
      Pop.toast('Invalid Selection', 'error')
    }

  }
  returnMoney() {
    ProxyState.total = 0
  }
  addMoney(val) {
    ProxyState.total += val
  }

}


export const snacksService = new SnacksService()