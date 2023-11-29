import { Router, request, response } from "express";
import { CreateSpecificationController } from "@modules/Cars/useCases/createSpecification/createSpecificationController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", ensureAuthenticated, 
ensureAdmin,  createSpecificationController.handle);

export{ specificationsRoutes }