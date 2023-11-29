import { inject, injectable } from "tsyringe";
import { IBrandRepository, IBrandDTO } from "@modules/Cars/repositories/IBrandRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest{

  name: string;
  description: string;
}

@injectable()

class CreateBrandUseCase{  
  constructor(
    @inject("BrandRepository")
    private brandRepository: IBrandRepository,
   
  ){}

  async execute({
    name,
    description,
    
    
    }:IRequest): Promise<IBrandDTO>{
      
      const brandAlreadyExists = await this.brandRepository.findByName(name);
      if(brandAlreadyExists){
      throw new AppError("Brand already exists!")}
        
      
      const result = await this.brandRepository.create({name, description})
      
      return result
    }
  
    
    
    
    
  }
  


export { CreateBrandUseCase }