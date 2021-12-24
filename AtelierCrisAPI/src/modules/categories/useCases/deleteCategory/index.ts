import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { DeleteCategoryController } from "./deleteCategoryController";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";

const categoryRepository = new CategoryRepository()

const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository)

const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryController }