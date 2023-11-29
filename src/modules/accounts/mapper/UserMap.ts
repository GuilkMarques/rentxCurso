import { IUserResponseDTO } from "../dtos/IUserResponse";
import { User } from "../infra/typeorm/entities/User";
import { classToPlain } from "class-transformer";

class UserMap{

    static toDTO({
      email,
      name,
      id,
      avatar,
      driver_license,
      avatar_url
    }: User): IUserResponseDTO{
      const user = classToPlain({
        email,
        name,
        id,
        avatar,
        driver_license,
        avatar_url})
      return user
    }
}


export{UserMap}