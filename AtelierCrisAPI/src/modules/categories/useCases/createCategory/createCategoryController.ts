import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name } = request.body

        try {
            const category = await this.createCategoryUseCase.execute({ name })
            return response.status(201).json(category)
        }
        catch (err) {

            return response.status(400).json({ error: err.message })

        }
    }
}

export { CreateCategoryController }