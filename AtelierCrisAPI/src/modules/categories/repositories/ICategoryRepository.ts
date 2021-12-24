import { Category } from "@prisma/client";
import { ICategoryDTO } from "../DTOs/Category";

interface ICategoryRepository {

    findById(id: string): Promise<Category>
    findByName(name: string): Promise<Category>
    listAll(): Promise<Category[]>
    create({ name }: ICategoryDTO): Promise<Category>
    updateName(name: string, id: string): Promise<Category>
    delete(id: string): Promise<void>
}

export { ICategoryRepository }