import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.location = data.location
    this.price = data.price
    this.description = data.description
    this.squareFeet = data.squareFeet
    this.img = data.img
    this.creatorName = data.creatorName
  }
  getCardTemplate() {
    return `
  <div class="'rounded">
  <img class="${this.img}
    alt="${this.bedrooms}, ${this.bathrooms}">
    <div class="d-flex justify-content-between">
      <p>${this.location}</p>
      <p>$${this.price}</p>
      <p>${this.squareFeet}sqft</p>
    </div>
</div>
    </div >`
  }
}