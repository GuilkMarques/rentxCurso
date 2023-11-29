import { Request, Response } from "express";
import { container } from "tsyringe";
import { MultiDeleteBrandUseCase } from "./multiDeleteBrandUseCase";


class MultiDeleteBrandController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { brands_id } = request.body;

    const multiDeleteBrandUseCase = container.resolve(MultiDeleteBrandUseCase);

    await multiDeleteBrandUseCase.execute({brands_id});

    return response.status(204).send();
  }
}

export { MultiDeleteBrandController }