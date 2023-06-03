import { UserManager, UserManagerSettings } from 'oidc-client';

export const userManagerConfig: UserManagerSettings = {
    authority: 'http://localhost:5001/',
    client_id: 'WebMvcClientForUser',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    scope: 'openid profile email gateway_fullpermition IdentityServerApi',
    post_logout_redirect_uri: 'http://localhost:3000/',
};

export const userManager = new UserManager(userManagerConfig);
