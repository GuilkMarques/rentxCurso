import { IBrandRepository } from "@modules/Cars/repositories/IBrandRepository";
import { Brand } from "@modules/Cars/infra/typeorm/entities/Brand";
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBrandUseCase{
  constructor (
    @inject("BrandRepository")
    private brandRepository: IBrandRepository){}

  async execute(): Promise <Brand[]>{
    const result = await this.brandRepository.list();
    return result;
  }
}

export { ListBrandUseCase }