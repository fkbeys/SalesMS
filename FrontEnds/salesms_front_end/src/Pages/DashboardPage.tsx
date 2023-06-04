import React from 'react';
import { useAuthUser } from "react-auth-kit";
import UserInfoManager from '../Authorization/UserInfoManager';


const DashboardPage: React.FC = () => {
    const user = UserInfoManager.ReadUserFromLocalStorage();


    return (
        <div>
            Dashboard Page... <br />
            Welcome {user?.userName}...
        </div>
    );
};

export default DashboardPage;
