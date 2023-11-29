import { inject, injectable } from "tsyringe";
import { IBrandRepository } from "@modules/Cars/repositories/IBrandRepository"

interface IRequest {
  brands_id: string[];
}

@injectable()
class MultiDeleteBrandUseCase {
  constructor(
    @inject("BrandRepository")
    private BrandRepository: IBrandRepository,
  ){}

  async execute({ brands_id }: IRequest): Promise<void>{
    await this.BrandRepository.multiDelete( brands_id );
  }
}

export { MultiDeleteBrandUseCase }