import { CategoryRepositoryInMemory } from "../../repositories/inMemory/categoryRepositoryInMemory"
import { CreateCategoryUseCase } from "../createCategory/createCategoryUseCase"
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase"

let deleteCategoryUseCase: DeleteCategoryUseCase
let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory

describe('Delele Category', () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
        deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepositoryInMemory)
    })

    it('should be able to delete a category by it\'s id', async () => {
        const category = {
            name: 'CategoryName'
        }

        const categoryCreated = await createCategoryUseCase.execute(category)

        await deleteCategoryUseCase.execute(categoryCreated.id)

        const categoryExists = categoryRepositoryInMemory.findByName(category.name)

        expect(categoryExists).toBeUndefined
    })

    it('should not be able to delete a category that doesn\'t exists', async () => {
        expect(async () => {
            const category = {
                name: 'CategoryName'
            }

            await createCategoryUseCase.execute(category)

            const result = await deleteCategoryUseCase.execute('Arbitrary-id-just-for-category-does-not-exists')

        }).rejects.toBeInstanceOf(Error)
    })
})