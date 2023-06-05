import { FeatureModel } from "./FeatureModel"

export interface CourseCreateModel {
    name: string
    decription: string
    price: number
    picture: string
    userId: string
    feature: FeatureModel
    categoryId: string
}
