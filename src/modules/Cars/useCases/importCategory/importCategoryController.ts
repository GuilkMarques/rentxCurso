import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { ImportCategoryUseCase } from '@modules/Cars/useCases/importCategory/importCategoryUseCase';

class ImportCategoryController{

  async handle(request:Request, response:Response):Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

    await importCategoryUseCase.execute(file)
    
    return response.status(201).send()
  }
}

export {ImportCategoryController}