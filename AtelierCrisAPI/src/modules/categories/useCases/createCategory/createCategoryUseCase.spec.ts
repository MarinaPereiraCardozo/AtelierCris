import { CategoryRepositoryInMemory } from "../../repositories/inMemory/categoryRepositoryInMemory"
import { CreateCategoryUseCase } from "./createCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory

describe("Create Category", () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })

    it('should be able to create a new category', async () => {

        const category = {
            name: "CategoryTest"
        }

        await createCategoryUseCase.execute(category)

        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)

        expect(categoryCreated).toHaveProperty('id')
    })

    it('should not be able to create a category with a existing name', async () => {

        expect(async () => {
            const category = {
                name: 'CategoryTest'
            }

            await createCategoryUseCase.execute(category)

            await createCategoryUseCase.execute(category)
        }).rejects.toBeInstanceOf(Error)
    })
})