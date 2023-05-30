// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace SalesMS.AuthService.AuthApi
{
    public static class Config
    {

        public static IEnumerable<ApiResource> ApiResource => new ApiResource[]
        {
            new ApiResource("resource_catalog"){Scopes={ "catalog_fullpermition" }},
            new ApiResource("resource_photo_stock"){Scopes={ "photo_stock_fullpermition" }},
            new ApiResource(IdentityServerConstants.LocalApi.ScopeName),
        };



        public static IEnumerable<IdentityResource> IdentityResources =>
                   new IdentityResource[]
                   {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),

                   };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                //new ApiScope("scope1"),
                //new ApiScope("scope2"),
                //new ApiScope(IdentityServerConstants.LocalApi.ScopeName,""),
                new ApiScope("IdentityServerApi", "Access to Identity Server API"),
                new ApiScope("catalog_fullpermition","Full access for Catalog api"),
                new ApiScope("photo_stock_fullpermition","Full access for Photo Stock api"),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {

                new Client{
                    ClientName="Asp.Net Core MVC",
                    ClientId="WebMvcClient",
                    ClientSecrets={ new Secret("secret".Sha256() ) },
                    AllowedGrantTypes=GrantTypes.ClientCredentials,
                    AllowedScopes={ "catalog_fullpermition", "photo_stock_fullpermition", IdentityServerConstants.LocalApi.ScopeName },
                    AllowOfflineAccess=true,
                },
            };
    }
}