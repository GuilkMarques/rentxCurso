import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateBrandController } from "@modules/Cars/useCases/CreateBrands/CreateBrandController";
import { ListBrandsController } from "@modules/Cars/useCases/ListBrands/listBrandController";
import { UpdateBrandController } from "@modules/Cars/useCases/updateCarBrand/updateCarBrandController";
import { DeleteBrandController } from "@modules/Cars/useCases/deleteBrands/deleteBrandsController";
import { MultiDeleteBrandController } from "@modules/Cars/useCases/multiDelete/multiDeleteBrandController";

const brandRoutes = Router()

const createBrandController = new CreateBrandController();
const listBrandController = new ListBrandsController()
const updateBrandController = new UpdateBrandController()
const deleteBrandController = new DeleteBrandController()
const multiDeleteBrandController = new MultiDeleteBrandController()

brandRoutes.post("/", ensureAuthenticated, ensureAdmin, createBrandController.handle)
brandRoutes.get("/",  listBrandController.handle)
brandRoutes.put("/update/:id", ensureAuthenticated, ensureAdmin, updateBrandController.handle)
brandRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, deleteBrandController.handle)
brandRoutes.delete("/", ensureAuthenticated, ensureAdmin, multiDeleteBrandController.handle)




export {brandRoutes}