import { Category } from "@prisma/client"
import { ICategoryRepository } from "../../repositories/ICategoryRepository"

interface IRequest {
    name: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    async execute({ name }: IRequest): Promise<Category> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists.length != 0) {
            throw new Error("Category Already Exists!")
        }

        const category = this.categoriesRepository.create({ name })

        return category
    }
}

export { CreateCategoryUseCase }