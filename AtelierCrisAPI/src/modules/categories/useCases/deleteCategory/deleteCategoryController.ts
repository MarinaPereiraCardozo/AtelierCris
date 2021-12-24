import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";

class DeleteCategoryController {
    constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body

        try {
            await this.deleteCategoryUseCase.execute(id)
            return response.status(200).send()
        } catch (err) {
            return response.status(404).json({ error: err.message })
        }

    }

}

export { DeleteCategoryController }