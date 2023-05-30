// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace SalesMS.AuthService.AuthApi
{
    public static class IdendityCustomConfig
    {
        public static string resource_catalog = "resource_catalog";
        public static string resource_photo_stock = "resource_photo_stock";

        public static string catalog_fullpermition = "catalog_fullpermition";
        public static string photo_stock_fullpermition = "photo_stock_fullpermition";
        public static string IdentityServerApi = IdentityServerConstants.LocalApi.ScopeName;
        public static string clientId = "WebMvcClient";


        public static IEnumerable<ApiResource> ApiResource => new ApiResource[]
        {
            new ApiResource(resource_catalog){Scopes={ "catalog_fullpermition" }},
            new ApiResource(resource_photo_stock){Scopes={ "photo_stock_fullpermition" }},
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
                new ApiScope(IdentityServerApi, "Access to Identity Server API"),
                new ApiScope(catalog_fullpermition,"Full access for Catalog api"),
                new ApiScope(photo_stock_fullpermition,"Full access for Photo Stock api"),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {

                new Client{
                    ClientName="Asp.Net Core MVC",
                    ClientId=clientId,
                    ClientSecrets={ new Secret("secret".Sha256() ) },
                    AllowedGrantTypes=GrantTypes.ClientCredentials,
                    AllowedScopes={ catalog_fullpermition, photo_stock_fullpermition, IdentityServerApi },
                    AllowOfflineAccess=true,
                },
            };
    }
}