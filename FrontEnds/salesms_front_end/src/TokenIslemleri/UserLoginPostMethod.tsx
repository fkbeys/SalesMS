import React from 'react'
import axios from 'axios';

interface AccessTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
    scope: string;
    errorMessage: string;
}


const UserLoginPostMethod = async (username: string, password: string) => {

    let resultFromApi = {} as AccessTokenResponse;

    const data = new URLSearchParams();
    data.append('client_id', 'WebMvcClientForUser');
    data.append('client_secret', 'secret');
    data.append('grant_type', 'password');
    data.append('username', username);
    data.append('password', password);

    try {
        const response = await axios.post('http://localhost:5001/connect/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });


        resultFromApi = response.data as AccessTokenResponse;
    } catch (error) {
        console.error(error);
    }

    return resultFromApi;


}

export default UserLoginPostMethod