import { createRefresh } from 'react-auth-kit';
import { refreshTokenCallback } from 'react-auth-kit/dist/types';

const callRefreshApi: refreshTokenCallback = async ({ authToken, refreshToken, authTokenExpireAt, refreshTokenExpiresAt, authUserState }) => {
    if (!authToken || !refreshToken) {
        throw new Error('Auth token and refresh token are required');
    }

    const response = await fetch('/api/refresh', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ refreshToken })
    });

    const data = await response.json();

    return {
        isSuccess: data.success,
        newAuthToken: data.newAuthToken,
        newAuthTokenExpireIn: 0.1,
        newRefreshToken: data.newRefreshToken,
        newRefreshTokenExpiresIn: 0.1,
        newAuthUserState: data.newAuthUserState
    };
}

const refreshApi = createRefresh({
    interval: 1,
    refreshApiCallback: callRefreshApi
});

export default refreshApi;
