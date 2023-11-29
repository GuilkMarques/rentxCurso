import { CreateRentalController } from "@modules/Rentals/useCases/createRentals/createRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DevolutionRentalController } from "@modules/Rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/Rentals/useCases/listRentalsByUser/ListRentalsByUserController";

const rentalRoutes = Router()
const createRentalController = new CreateRentalController
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle)
rentalRoutes.post("/devolution/:id", ensureAuthenticated, devolutionRentalController.handle);
rentalRoutes.get("/user", ensureAuthenticated, listRentalsByUserController.handle);

export{rentalRoutes}