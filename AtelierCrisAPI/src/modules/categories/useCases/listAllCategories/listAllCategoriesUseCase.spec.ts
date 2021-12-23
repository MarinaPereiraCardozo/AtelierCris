import { CategoryRepositoryInMemory } from "../../repositories/inMemory/categoryRepositoryInMemory"
import { ListAllCategoriesUseCase } from "./listAllCategoriesUseCase"

let listAllCategories: ListAllCategoriesUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory

describe("List All Categories", () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory()
        listAllCategories = new ListAllCategoriesUseCase(categoryRepositoryInMemory)
    })

    it('should be able to list all categories', async () => {
        const categories = await listAllCategories.execute()

        expect(categories).toBeInstanceOf(Array)
    })
}) 