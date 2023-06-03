import { RequireAuth } from 'react-auth-kit';
import LayoutPage from '../Pages/LayoutPage';

interface model {
    component: JSX.Element
}


const AuthController = (model: model) => {
    return (
        <RequireAuth loginPath={'/'}>
            <LayoutPage children={model.component} />
        </RequireAuth>
    )
}

export default AuthController
