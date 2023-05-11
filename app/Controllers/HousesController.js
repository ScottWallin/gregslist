import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesServices.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {

  console.log('drawing houses')
}

export class HousesController {
  constructor() {
    _drawHouses()
  }
}