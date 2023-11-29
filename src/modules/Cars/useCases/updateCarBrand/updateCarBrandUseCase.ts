import { inject, injectable } from "tsyringe";

import { IBrandRepository } from "@modules/Cars/repositories/IBrandRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateCarBrandUseCase {
  constructor(
    @inject("BrandRepository")
    private brandRepository: IBrandRepository,
   
  ) {}

  async execute({ id, name, description }: IRequest): Promise<void> {
    await this.brandRepository.update({id, name, description}) 
   
  
  }
}

export { UpdateCarBrandUseCase }
