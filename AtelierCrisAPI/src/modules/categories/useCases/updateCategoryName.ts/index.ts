import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { UpdateCategoryNameController } from "./updateCategoryNameController";
import { UpdateCategoryNameUseCase } from "./updateCategoryNameUseCase";

const categoryRepository = new CategoryRepository()

const updateCategoryNameUseCase = new UpdateCategoryNameUseCase(categoryRepository)

const updateCategoryNameController = new UpdateCategoryNameController(updateCategoryNameUseCase)

export { updateCategoryNameController }