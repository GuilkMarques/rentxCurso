import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "@modules/Cars/repositories/ICategoriesRepository";
import { ICreateCategoryDTO } from "@modules/Cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest{
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase{
  constructor (
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){}

  async execute({ description, name }: IRequest): Promise<ICreateCategoryDTO>{

    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    if(categoryAlreadyExists){
      throw new AppError("Category already exists!")
    }

    const retorno = await this.categoriesRepository.create({name, description})

    return retorno;
  }
}


export {CreateCategoryUseCase}