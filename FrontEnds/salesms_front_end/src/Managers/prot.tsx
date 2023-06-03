import { Navigate, useLocation } from 'react-router-dom';
import { Route, RouteProps } from 'react-router';

interface ProtectedRouteProps {
    path: string;
    isAuthenticated: boolean; // this will be passed in to determine if the user is authenticated
    authenticationPath: string; // the path to redirect to if user is not authenticated
    element: React.ReactNode; // the component to render if user is authenticated
}

export function ProtectedRoute({ isAuthenticated, authenticationPath, ...routeProps }: ProtectedRouteProps) {
    let location = useLocation();

    if (isAuthenticated) {
        // if the user is authenticated, render the component that was passed in
        return <Route {...routeProps} />;
    } else {
        // if the user is not authenticated, redirect to login
        return <Navigate to={authenticationPath} state={{ from: location }} replace />
    }
}
