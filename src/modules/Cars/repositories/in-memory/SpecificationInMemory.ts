import { ISpecificationsRepository,ICreateSpecificationDTO } from '@modules/Cars/repositories/ISpecificationsRepository';
import { Specification } from "@modules/Cars/infra/typeorm/entities/Specification";



class SpecificationRepositoryInMemory implements ISpecificationsRepository {
  
  specifications: Specification[] = [];

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, {
      description,
      name,
    });
    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) => ids.includes(specification.id));

    return allSpecifications;
  }
  

}

export { SpecificationRepositoryInMemory };