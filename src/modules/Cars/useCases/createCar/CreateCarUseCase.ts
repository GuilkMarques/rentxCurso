import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Car } from "@modules/Cars/infra/typeorm/entities/Car";

interface IRequest{
  name:string;
  description: string;
  daily_rate:number;
  license_plate:string,
  fine_amount: number;
  category_id:string
  brand_id:string
}

@injectable()
class CreateCarUseCase{
  
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ){}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand_id,
    category_id}:IRequest): Promise<Car>{

      const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate)
      if (carAlreadyExists){
        throw new AppError("Car already Exists")
      }

     const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand_id,
      category_id
    
     })
     return car
    }
  }



export { CreateCarUseCase }