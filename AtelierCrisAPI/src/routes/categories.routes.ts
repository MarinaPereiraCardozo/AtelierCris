import { Router } from "express";
import { createCategoryController } from "../modules/categories/useCases/createCategory";

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {

    return createCategoryController.handle(request, response)
})

export { categoriesRoutes }