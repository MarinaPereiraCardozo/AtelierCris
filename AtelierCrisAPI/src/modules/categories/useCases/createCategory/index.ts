import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const categoryRepostory = new CategoryRepository()

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepostory)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }