import { AddressModel } from "./AddressModel"
import { OrderItemModel } from "./OrderItemModel"

export interface OrderModel {
    Id: number
    CreatedDate: string
    Address: AddressModel
    BuyerId: string
    OrderItems: OrderItemModel[]
}
