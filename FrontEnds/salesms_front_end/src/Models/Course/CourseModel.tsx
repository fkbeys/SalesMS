import { CategoryModel } from "./CategoryModel"
import { FeatureModel } from "./FeatureModel"

export interface CourseModel {

    id: string
    name: string
    decription: string
    price: string
    picture: string
    createdDateTime: string
    userId: string
    feature: FeatureModel
    categoryId: string
    category: CategoryModel
}
