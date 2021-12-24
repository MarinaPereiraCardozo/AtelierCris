import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class DeleteCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: string): Promise<void> {

        const categoryExists = await this.categoryRepository.findById(id)

        if (!categoryExists) {
            throw new Error(`Category with id ${id} doesn't exists!`)
        }

        await this.categoryRepository.delete(id)

        return
    }

}

export { DeleteCategoryUseCase }