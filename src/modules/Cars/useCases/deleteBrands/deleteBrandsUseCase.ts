import { inject, injectable } from "tsyringe";
import { IBrandRepository } from "@modules/Cars/repositories/IBrandRepository";

interface IRequest{

  id:string
}

@injectable()

class DeleteBrandUseCase{  
  constructor(
    @inject("BrandRepository")
    private brandRepository: IBrandRepository){}

  async execute({id}:IRequest): Promise<void>{
        await this.brandRepository.delete(id)
      }
    }
    

  


export { DeleteBrandUseCase }