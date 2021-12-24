import { Category } from "@prisma/client";
import { Request, Response } from "express";
import { UpdateCategoryNameUseCase } from "./updateCategoryNameUseCase";

class UpdateCategoryNameController {

    constructor(private updateCategoryNameUseCase: UpdateCategoryNameUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, id } = request.body

        try {
            const category = await this.updateCategoryNameUseCase.execute(name, id)
            return response.status(200).json(category)
        } catch (err) {
            return response.status(404).json({ error: err.message })
        }


    }
}

export { UpdateCategoryNameController }
