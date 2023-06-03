import React from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends Omit<RouteProps, 'element'> {
    isAuthenticated: boolean;
    redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    redirectPath }) => {
    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};

export default PrivateRoute;
