import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {


  setActive(houseID) {
    let foundHouse = appState.houses.find(h => h.id == houseID)
    console.log(foundHouse);
  }
}

export const housesService = new HousesService()