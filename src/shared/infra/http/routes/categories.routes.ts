import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/Cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '@modules/Cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '@modules/Cars/useCases/importCategory/importCategoryController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();


categoriesRoutes.post(
  "/", 
  ensureAuthenticated, 
  ensureAdmin, 
  createCategoryController.handle)

categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post(
  "/import", 
  upload.single("file"), 
  ensureAuthenticated, 
  ensureAdmin, 
  importCategoryController.handle);

export{ categoriesRoutes }
