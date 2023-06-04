import { BasketItemModel } from "./BasketItemModel"

export interface BasketModel {
    userId: string
    discountCode: string
    basketItem: BasketItemModel
}
