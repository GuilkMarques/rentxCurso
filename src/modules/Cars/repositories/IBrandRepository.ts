import { int } from "aws-sdk/clients/datapipeline";
import { Brand } from "../infra/typeorm/entities/Brand";


interface IBrandDTO{
  id?: string;
  name:string;
  description:string;
  sequence?: string;
  
}

interface IBrandRepository{
  create({name, description, sequence}: IBrandDTO): Promise<IBrandDTO>
  list(): Promise <Brand[]>;
  findByName(name: string): Promise <Brand>;
  update({id, name, description}: IBrandDTO): Promise<IBrandDTO>
  delete(id: string): Promise<void>
  multiDelete(brands_id: string[]): Promise<void>
  
}

export {IBrandRepository, IBrandDTO}