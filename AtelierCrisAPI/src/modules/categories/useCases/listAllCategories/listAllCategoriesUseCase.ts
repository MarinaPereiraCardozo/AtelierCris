
import { Category } from "@prisma/client";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListAllCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.listAll()

        return categories
    }

}

export { ListAllCategoriesUseCase }