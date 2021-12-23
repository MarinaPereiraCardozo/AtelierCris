import { Category } from "@prisma/client";
import { ICategoryDTO } from "../../DTOs/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {

    categories: Category[] = []

    async findByName(name: string): Promise<Category | undefined> {
        const category = await this.categories.find((category) => category.name === name)

        return category
    }
    async listAll(): Promise<Category[]> {
        const categories = await this.categories

        return categories
    }
    async create({ name }: ICategoryDTO): Promise<Category> {
        const category = {
            id: '',
            name: '',
        }

        Object.assign(category, {
            name,
            id: 'hash-id-just-for-test'
        })

        await this.categories.push(category)

        return category
    }
}

export { CategoryRepositoryInMemory }