import { response, Router } from "express";
import { createCategoryController } from "../modules/categories/useCases/createCategory";
import { deleteCategoryController } from "../modules/categories/useCases/deleteCategory";
import { listAllCategoriesController } from "../modules/categories/useCases/listAllCategories";
import { updateCategoryNameController } from "../modules/categories/useCases/updateCategoryName.ts";

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
    return listAllCategoriesController.handle(request, response)
})

categoriesRoutes.patch('/', (request, response) => {
    return updateCategoryNameController.handle(request, response)
})

categoriesRoutes.delete('/', (request, response) => {
    return deleteCategoryController.handle(request, response)
})

export { categoriesRoutes }
