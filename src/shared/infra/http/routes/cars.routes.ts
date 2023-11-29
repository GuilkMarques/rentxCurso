import { Router } from "express";
import multer from "multer";
import uploadConfig  from '@config/upload';

import { CreateCarController } from "@modules/Cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/Cars/useCases/listCars/listAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/Cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImageController } from "@modules/Cars/useCases/uploadCarImage/uploadCarImageController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()
const uploadCarImageController = new UploadCarImageController()
const uploadCarImage = multer(uploadConfig);

carsRoutes.post(
  "/", 
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle);

carsRoutes.get("/available", listAvailableCarsController.handle)

carsRoutes.post(
  "/specifications/:id", 
  ensureAuthenticated, 
  ensureAdmin, 
  createCarSpecificationController.handle)

carsRoutes.post(
    "/images/:id", 
    ensureAuthenticated, 
    ensureAdmin, 
    uploadCarImage.array("images"),
    uploadCarImageController.handle)


export { carsRoutes }