import { getRepository, Repository } from "typeorm";

import { ISpecificationsRepository, ICreateSpecificationDTO } from "@modules/Cars/repositories/ISpecificationsRepository";
import { Specification } from "@modules/Cars/infra/typeorm/entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository{

  
  private repository: Repository <Specification>;
  constructor(){
    this.repository = getRepository(Specification);
  }
 
  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description, 
      name,
    });
    await this.repository.save(specification);
    return specification;
  }
    

  async findByName(name: string): Promise<Specification>{
    const specification = this.repository.findOne( { where: { name } });
  
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);

    return specifications;
  }
}

export { SpecificationsRepository }
