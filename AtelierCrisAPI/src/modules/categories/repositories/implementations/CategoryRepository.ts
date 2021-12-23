import { Category, PrismaClient } from "@prisma/client";
import { ICategoryDTO } from "../../DTOs/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository = new PrismaClient()

    async findByName(name: string): Promise<Category | null> {
        const category = await this.repository.category.findUnique({
            where: {
                name: name
            }
        })

        return category
    }

    async listAll(): Promise<Category[]> {
        const categories = await this.repository.category.findMany()
        return categories
    }

    async create({ name }: ICategoryDTO): Promise<Category> {
        const category = await this.repository.category.create({
            data: {
                name: name,
            }
        })

        return category
    }

}

export { CategoryRepository }