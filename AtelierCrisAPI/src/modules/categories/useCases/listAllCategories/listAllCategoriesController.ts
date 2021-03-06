import { Request, Response } from "express";
import { ListAllCategoriesUseCase } from "./listAllCategoriesUseCase";

class ListAllCategoriesController {

    constructor(private listAllCategoriesUseCase: ListAllCategoriesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const categories = await this.listAllCategoriesUseCase.execute()

        return response.status(200).json(categories)
    }
}

export { ListAllCategoriesController }