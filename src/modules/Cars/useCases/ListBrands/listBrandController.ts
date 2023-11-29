import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBrandUseCase } from './listBrandUseCase';

class ListBrandsController{
  async handle(request: Request, response: Response): Promise<Response>{

    const listBrandsUseCase = container.resolve(ListBrandUseCase);

    const all = await listBrandsUseCase.execute();
    return response.json(all);
    
    }
}

export{ ListBrandsController }