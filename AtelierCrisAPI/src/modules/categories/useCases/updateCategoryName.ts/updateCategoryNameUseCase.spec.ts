import { CategoryRepositoryInMemory } from "../../repositories/inMemory/categoryRepositoryInMemory"
import { CreateCategoryUseCase } from "../createCategory/createCategoryUseCase"
import { UpdateCategoryNameUseCase } from "./updateCategoryNameUseCase"

let updateCategoryNameUseCase: UpdateCategoryNameUseCase
let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory

describe('Update Category', () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory()
        updateCategoryNameUseCase = new UpdateCategoryNameUseCase(categoryRepositoryInMemory)
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })


    it('should be able to update category name', async () => {
        const category = {
            name: 'CategoryName'
        }

        await createCategoryUseCase.execute(category)

        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)

        const categoryUpdated = await updateCategoryNameUseCase.execute('CategoryNameUpdated', categoryCreated.id)

        expect(categoryUpdated.name).toEqual('CategoryNameUpdated')
    })
})