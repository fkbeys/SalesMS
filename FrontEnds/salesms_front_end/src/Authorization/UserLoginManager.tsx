import React from 'react'
import axios from 'axios';
import { GenericApiResultModel } from '../Models/Generic/ApiResultModel';
import { UserModel } from '../Models/UserModel';
import Url from '../Consts/Url';
import UserInfoManager from './UserInfoManager';

interface AccessTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
    scope: string;
    errorMessage: string;
}


const UserLoginManager = async (username: string, password: string) => {

    let resultFromApi = {} as AccessTokenResponse;

    const data = new URLSearchParams();
    data.append('client_id', 'WebMvcClientForUser');
    data.append('client_secret', 'secret');
    data.append('grant_type', 'password');
    data.append('username', username);
    data.append('password', password);

    try {
        const response = await axios.post(Url.GetTokenUrl, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        resultFromApi = response.data as AccessTokenResponse;

        const userInfoRequest = await axios.get<GenericApiResultModel<UserModel>>(Url.GetUserUrl, {
            headers: { Authorization: "Bearer " + resultFromApi.access_token }
        });

        if (userInfoRequest?.status === 200) {
            UserInfoManager.SaveUserToLocalStorage(userInfoRequest.data);
            console.log(userInfoRequest.data.data);
        }


    } catch (error) {
        console.error(error);
    }

    return resultFromApi;


}

export default UserLoginManager

