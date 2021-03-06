import { Category } from "@prisma/client";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class UpdateCategoryNameUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(name: string, id: string): Promise<Category> {

        const categoryExists = await this.categoryRepository.findById(id)

        if (!categoryExists) {
            throw new Error(`Category with id ${id} doesn't exists!`)
        }

        const category = await this.categoryRepository.updateName(name, id)

        return category
    }
}

export { UpdateCategoryNameUseCase }