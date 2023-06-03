import { useEffect, useState } from 'react';
import { User } from 'oidc-client';
import { userManager } from './UserManagerConfig';

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const user = await userManager.getUser();
                setUser(user);
            } catch (e) {
                console.error('Failed to get user', e);
            }
        };

        const onUserLoaded = (user: User) => setUser(user);

        initializeUser();

        userManager.events.addUserLoaded(onUserLoaded);

        return () => {
            userManager.events.removeUserLoaded(onUserLoaded);
        };
    }, []);

    return user;
};
