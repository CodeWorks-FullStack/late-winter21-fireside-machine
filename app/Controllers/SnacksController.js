import { ProxyState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"

function _drawTotal() {
  document.getElementById('total').innerText = ProxyState.total.toFixed(2)
}

function _drawSnacks() {
  const snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  document.getElementById('snacks').innerHTML = template
}

export class SnacksController {
  constructor() {
    ProxyState.on('total', _drawTotal)
    ProxyState.on('snacks', _drawSnacks)

    _drawSnacks()
  }

  addMoney(val) {
    snacksService.addMoney(val)
  }

  returnMoney() {
    snacksService.returnMoney()
  }

  buySnack(id) {
    snacksService.buySnack(id)
  }
}