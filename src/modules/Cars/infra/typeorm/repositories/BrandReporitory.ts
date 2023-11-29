import { IBrandRepository, IBrandDTO } from "@modules/Cars/repositories/IBrandRepository";
import { Repository, getRepository } from "typeorm";
import { Brand } from "../entities/Brand";
import { AppError } from "@shared/errors/AppError";


class BrandRepository implements IBrandRepository {

  private repository: Repository<Brand>;

  constructor() {
    this.repository = getRepository(Brand);
  }
  
  async create({
    name,
    description,
    
  }: IBrandDTO): Promise<IBrandDTO> {

    const results = await this.repository.find({order: {sequence: "ASC"}})
    // let seq2 = 0
    let seq =results.length==0?1:+results.slice(-1)[0].sequence+1


    // if (
    //   results.length==0
    // ){
    //  seq=1
    // }else{
    //  seq =+ results.slice(-1)[0].sequence+1
    // }

    const brand = this.repository.create({

      name,
      description,
      sequence:seq.toString()
      
    });
    
    const result = await this.repository.save(brand);
    
    return result;
  }
  
  async list(): Promise <Brand[]> {
    const brands = await this.repository.find()
    return brands
  }
  
  async findByName(name: string): Promise <Brand> {
    const brand = await this.repository.findOne({ where:{name} })
    return brand;
  }
  
  async update({id, name, description}: IBrandDTO): Promise<IBrandDTO> {
    const IdExists = this.repository.findOne(id);
    if(!IdExists){
      throw new AppError("ID does not exists!");
      
    } 

    const brand = this.repository.create({id,name,description});

    const result = await this.repository.save(brand);

    
    return result;
  }

  async delete(id: string): Promise<void>{
    const deleteID = await this.repository.findOne(id)
try{
    if (!deleteID) {
      throw new AppError("Brand does not exists!")
    }
    await this.repository.delete(id)
  }catch (error) {

    if (error.message.includes("violates foreign key constraint")){
      throw new AppError("Brand is related to a car!");
      
    }
  }
      
}
  

  async multiDelete(ids: string[]): Promise<void> {

    try{
      for await(let lines of ids){
        const idExists = await this.repository.findOne(lines);
        if(!idExists){
          throw new AppError("Id does not exist!");
        }
        await this.repository.delete(lines);
      }}catch (error) {
      

        if (error.message.includes("violates foreign key constraint")){
          throw new AppError("Brand is related to a car!");
          
        }
      }

    }
}
  
  

  export { BrandRepository };
