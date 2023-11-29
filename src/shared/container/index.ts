import { container } from "tsyringe";

import "@shared/container/providers"

import { ICategoriesRepository } from "@modules/Cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/Cars/infra/typeorm/repositories/CategoriesRepository";
import { ISpecificationsRepository } from "@modules/Cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "@modules/Cars/infra/typeorm/repositories/SpecificationRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/Cars/infra/typeorm/repositories/CarsRepository";
import { ICarsImagesRepository } from "@modules/Cars/repositories/ICarsImagesRepository";
import { CarsImageRepository } from "@modules/Cars/infra/typeorm/repositories/CarImagesRepository";
import { IRentalsRepository } from "@modules/Rentals/repositories/IRentalsRepository";
import { RentalsRepository } from "@modules/Rentals/infra/typeorm/repositories/RentalsRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokenRepository";
import { IBrandRepository } from "@modules/Cars/repositories/IBrandRepository";
import { BrandRepository } from "@modules/Cars/infra/typeorm/repositories/BrandReporitory";


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
 CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
 SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImageRepository",
  CarsImageRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
container.registerSingleton<IBrandRepository>(
  "BrandRepository",
  BrandRepository
);