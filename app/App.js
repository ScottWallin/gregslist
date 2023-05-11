import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  carsController = new CarsController();

  userController = new UserController();
  housesController = new HousesController();
}

window["app"] = new App();
