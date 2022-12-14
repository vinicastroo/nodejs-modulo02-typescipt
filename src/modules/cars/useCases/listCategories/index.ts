import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCases = new ListCategoriesUseCases(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCases)

export { listCategoriesController }