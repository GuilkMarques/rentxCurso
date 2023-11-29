import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateCarBrandUseCase } from "./updateCarBrandUseCase";

class UpdateBrandController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description} = request.body

    const updateCarBrandUseCase = container.resolve(UpdateCarBrandUseCase)
  
    await updateCarBrandUseCase.execute({id, name, description });
  
    return response.status(204).send();
  }
}

export { UpdateBrandController }
