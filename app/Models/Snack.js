import { generateId } from "../Utils/generateId.js"

export class Snack {
  constructor(name, imgUrl, price, quantity) {
    this.id = generateId()
    this.name = name
    this.imgUrl = imgUrl
    this.price = price
    this.quantity = quantity
  }

  get Template() {
    return `
    <div class="col-3 text-center p-3">
      <div class="bg-secondary shadow rounded selectable ${this.quantity ? '' : 'greyscale'}" onclick="app.snacksController.buySnack('${this.id}')">
        <img class="product-img rounded-top" src="${this.imgUrl}">
        <div class="p-2">
          <h5>${this.name} - $${this.price.toFixed(2)}</h5>
        </div>
      </div>
    </div>
    `
  }
}