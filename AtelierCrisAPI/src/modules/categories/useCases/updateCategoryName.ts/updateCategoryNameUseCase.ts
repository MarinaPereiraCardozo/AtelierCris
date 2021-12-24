import { Category } from "@prisma/client";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class UpdateCategoryNameUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(name: string, id: string): Promise<Category> {

        const category = await this.categoryRepository.updateName(name, id)

        return category
    }
}

export { UpdateCategoryNameUseCase }