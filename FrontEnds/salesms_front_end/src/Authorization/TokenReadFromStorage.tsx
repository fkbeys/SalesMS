import { UserLoginResultModel } from "../Models/UserLogin/UserLoginResultModel";



const TokenReadFromStorage = (): string => {

    const obj = JSON.parse(localStorage.getItem("userInfo") || "") as UserLoginResultModel;
    const readToken = "Bearer " + obj?.data?.kullaniciToken;
    return readToken;
}


export default TokenReadFromStorage