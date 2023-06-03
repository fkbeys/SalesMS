import { KullanicilarModel } from "../KullanicilarModel"



export interface UserLoginResultModel {
    data: KullanicilarModel
    isSuccess: boolean
    message: string
}
