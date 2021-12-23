import { Category } from "@prisma/client";
import { ICategoryDTO } from "../DTOs/Category";

interface ICategoryRepository {
    findByName(name: string): Promise<Category | undefined | null>
    listAll(): Promise<Category[]>
    create({ name }: ICategoryDTO): Promise<Category>
}

export { ICategoryRepository }