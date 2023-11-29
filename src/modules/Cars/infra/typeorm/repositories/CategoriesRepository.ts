import { Repository, getRepository } from 'typeorm';
import { Category } from '@modules/Cars/infra/typeorm/entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/Cars/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{

  private repository: Repository<Category>


  constructor(){
    this.repository = getRepository(Category)
  }

  async create({ description, name }: ICreateCategoryDTO): Promise <ICreateCategoryDTO>{
    const category = this.repository.create({
      description,
      name,
    })
    const result = await this.repository.save(category)

    return result
  }

  async list(): Promise <Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise <Category> {
    const category = await this.repository.findOne({ where:{name} })
    return category;
  }

}

export {CategoriesRepository} 