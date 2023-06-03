import axios from 'axios';

class UserManager {
    async getUserInfo(token: string) {
        const response = await axios.get('https://your-api-endpoint.com/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }
}

export default new UserManager();
