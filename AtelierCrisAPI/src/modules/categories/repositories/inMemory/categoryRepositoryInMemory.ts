// import { Category } from "@prisma/client";
import { ICategoryDTO } from "../../DTOs/Category";
import { ICategoryRepository } from "../ICategoryRepository";


class Category {
    id: string
    name: string
}

export { Category }

class CategoryRepositoryInMemory implements ICategoryRepository {

    categories: Category[] = []

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find((category) => category.name === name)

        return category
    }
    async listAll(): Promise<Category[]> {
        const categories = this.categories

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

        this.categories.push(category)

        return category
    }

    async updateName(name: string, id: string): Promise<Category> {

        const category = this.categories.find(category => category.id === id)

        Object.assign(category, {
            name
        })

        return category

    }
    delete(id: string): Promise<void> {
        const category = this.categories.find(category => category.id === id)

        this.categories.splice(this.categories.indexOf(category))

        return
    }


}

export { CategoryRepositoryInMemory }