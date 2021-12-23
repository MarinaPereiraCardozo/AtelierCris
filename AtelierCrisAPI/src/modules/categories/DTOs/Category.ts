import { SubCategory } from "@prisma/client";

interface ICategoryDTO {
    name: string
    subCategory?: SubCategory[]
}

export { ICategoryDTO }