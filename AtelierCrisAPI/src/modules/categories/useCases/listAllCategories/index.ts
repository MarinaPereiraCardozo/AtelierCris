import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListAllCategoriesController } from "./listAllCategoriesController";
import { ListAllCategoriesUseCase } from "./listAllCategoriesUseCase";

const categoryRepository = new CategoryRepository()

const listAllCategoriesUseCase = new ListAllCategoriesUseCase(categoryRepository)

const listAllCategoriesController = new ListAllCategoriesController(listAllCategoriesUseCase)

export { listAllCategoriesController }
