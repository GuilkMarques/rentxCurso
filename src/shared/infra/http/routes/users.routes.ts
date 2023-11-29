import { Router } from "express";
import { CreateUserController } from "@modules/accounts/useCases/createUser/createUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "@config/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import multer from "multer";
import { ProfileUserController } from "@modules/accounts/profileUserUseCase/ProfileUserController";

const usersRoutes = Router();
const createUserController =  new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController;
const profileUserController = new ProfileUserController();



const uploadAvatar = multer(uploadConfig);


usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"), 
  updateUserAvatarController.handle
);

usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle)

export{usersRoutes}