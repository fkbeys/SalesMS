import { GenericApiResultModel } from "../Models/Generic/ApiResultModel";
import { UserModel } from "../Models/UserModel";



const SaveUserToLocalStorage = (user: GenericApiResultModel<UserModel>) => {
    localStorage.setItem("userInfo", JSON.stringify(user.data));
}


const DeleteUserToLocalStorage = () => {
    localStorage.removeItem("userInfo");
}


const ReadUserFromLocalStorage = () => {
    let result = {} as UserModel;
    try {
        const obj = JSON.parse(localStorage.getItem("userInfo") || "") as GenericApiResultModel<UserModel>;
        return obj;
    } catch (error) {
        console.log('Read user error');
        return result;
    }
}


const UserInfoManager = {
    SaveUserToLocalStorage, ReadUserFromLocalStorage, DeleteUserToLocalStorage
};

export default UserInfoManager;

