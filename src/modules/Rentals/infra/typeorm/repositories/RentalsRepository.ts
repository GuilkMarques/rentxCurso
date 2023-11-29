import { ICreateRentalDTO } from "@modules/Rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/Rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";


class RentalsRepository implements IRentalsRepository {

  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }
  
  async create({ 
    car_id, 
    expected_return_date,
    user_id,
    id,
    end_date,
    total,
  }: ICreateRentalDTO): Promise<Rental>{
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      id,
      user_id,
      end_date,
      total
    });

    await this.repository.save(rental);
    return rental;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    console.log("user_id")
    console.log( user_id)
    const user = await this.repository.findOne({
      where: { user_id, end_date: null}
    });
    console.log(user)

    return user;
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    console.log("chegou")

    const car = await this.repository.findOne({
      where: { car_id, end_date: null}
    })
    return car;
  }

  async findById(id: string): Promise<Rental> {
    const rentalId = await this.repository.findOne(id);
    return rentalId;
  }

  async findByUser(user_id: string): Promise<Rental[]> {
    // const rentals = await this.repository.find({
    //   where: { user_id },
    //   relations: ["car"]
    // });

    // return rentals;
    const rentals = await this.repository.createQueryBuilder("ren")
    .select([
      `ren.id as "id",
      ren.expected_return_date as "return_date",
      car.name as "name_car"`
    ])
    .leftJoin("cars", "car", "car.id = ren.car_id")
    .getRawMany()

    return rentals;
  }
  
}

export { RentalsRepository };