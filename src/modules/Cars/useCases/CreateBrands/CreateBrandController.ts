import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBrandUseCase } from "./CreateBrandUseCase";

class CreateBrandController {
  brandRepository: any;
  async handle(request: Request, response: Response): Promise<Response>{

    const { 
      name,
      description,
      
      } = request.body;

    
    const createBrandUseCase = container.resolve(CreateBrandUseCase);

    const brand = await createBrandUseCase.execute({
      name,
      description,
      
    });



    return response.status(201).json(brand);
  }
}

export{ CreateBrandController }