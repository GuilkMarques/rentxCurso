import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { rentalRoutes } from "./rental.routes";
import { passwordRoutes } from "./passwords.routes";
import { brandRoutes } from "./brand.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes)
router.use(authenticateRoutes)
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use("/password", passwordRoutes);
router.use("/brands", brandRoutes);



export { router }