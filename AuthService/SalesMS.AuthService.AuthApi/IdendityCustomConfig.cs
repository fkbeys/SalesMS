// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;

namespace SalesMS.AuthService.AuthApi
{
    public static class IdendityCustomConfig
    {
        public static string resource_catalog = "resource_catalog";
        public static string resource_photo_stock = "resource_photo_stock";
        public static string resource_basket = "resource_basket";
        public static string resource_discount = "resource_discount";
        public static string resource_order = "resource_order";
        public static string resource_payment = "resource_payment";
        public static string resource_gateway = "resource_gateway";

        public static string resource_IdentityServerApi = "resource_IdentityServerApi";

        public static string catalog_fullpermition = "catalog_fullpermition";
        public static string photo_stock_fullpermition = "photo_stock_fullpermition";
        public static string basket_fullpermition = "basket_fullpermition";
        public static string discount_fullpermition = "discount_fullpermition";
        public static string order_fullpermition = "order_fullpermition";
        public static string payment_fullpermition = "payment_fullpermition";
        public static string gateway_fullpermition = "gateway_fullpermition";


        public static string IdentityServerApi = IdentityServerConstants.LocalApi.ScopeName;


        public static string clientId = "WebMvcClient";
        public static string userClientId = "WebMvcClientForUser";


        public static IEnumerable<ApiResource> ApiResource => new ApiResource[]
        {
            new ApiResource(resource_catalog){Scopes={ catalog_fullpermition }},
            new ApiResource(resource_photo_stock){Scopes={ photo_stock_fullpermition }},
            new ApiResource(resource_basket){Scopes={ basket_fullpermition }},
            new ApiResource(resource_discount){Scopes={ discount_fullpermition }},
            new ApiResource(resource_order){Scopes={ order_fullpermition }},
            new ApiResource(resource_payment){Scopes={ payment_fullpermition }},
            new ApiResource(resource_gateway){Scopes={ gateway_fullpermition }},

            new ApiResource(resource_IdentityServerApi){Scopes={ IdentityServerApi }},
          
            //new ApiResource(IdentityServerConstants.LocalApi.ScopeName),
        };

        public static IEnumerable<IdentityResource> IdentityResources =>
                   new IdentityResource[]
                   {
                new IdentityResources.Email(),
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResource(){Name="roles",DisplayName="roles",Description="User Roles",UserClaims=new []{"roles" }}
                   };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope(IdentityServerApi, "Access to Identity Server API"),
                new ApiScope(catalog_fullpermition,"Full access for Catalog api"),
                new ApiScope(photo_stock_fullpermition,"Full access for Photo Stock api"),
                new ApiScope(basket_fullpermition,"Full access for Basket api"),
                new ApiScope(discount_fullpermition,"Full access for Discount api"),
                new ApiScope(order_fullpermition,"Full access for Order api"),
                new ApiScope(payment_fullpermition,"Full access for Payment api"),
                new ApiScope(gateway_fullpermition,"Full access for Gateway api"),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {

                new Client{
                    ClientName="Asp.Net Core JWT for Trusted Apps",
                    ClientId=clientId,
                    ClientSecrets={ new Secret("secret".Sha256() ) },
                    AllowedGrantTypes=GrantTypes.ClientCredentials,
                    AllowedScopes={ catalog_fullpermition, photo_stock_fullpermition, IdentityServerApi,gateway_fullpermition },
                    AllowOfflineAccess=true,
                },


                 new Client{
                    ClientName="Asp.Net Core JWT For Users",
                    ClientId=userClientId,
                    ClientSecrets={ new Secret("secret".Sha256() ) },
                    AllowedGrantTypes=GrantTypes.ResourceOwnerPassword,
                    AllowedScopes={ IdentityServerConstants.StandardScopes.Email,IdentityServerConstants.StandardScopes.Address, IdentityServerConstants.StandardScopes.OpenId,IdentityServerConstants.StandardScopes.Profile,
                         IdentityServerConstants.StandardScopes.Phone, IdentityServerConstants.LocalApi.ScopeName,"roles",
                         IdentityServerConstants.StandardScopes.OfflineAccess,
                         IdentityServerApi,basket_fullpermition,discount_fullpermition
                         ,order_fullpermition,payment_fullpermition,gateway_fullpermition
                     },
                    AccessTokenLifetime=3,  //3600 seconds=1 hour
                    AllowOfflineAccess=true, // it opens the refresh token
                    //AbsoluteRefreshTokenLifetime=(int)(DateTime.Now.AddDays(60)-DateTime.Now).TotalSeconds, //refresh token expiration in seconds (60 days )
                    AbsoluteRefreshTokenLifetime=3,
                    RefreshTokenExpiration=TokenExpiration.Absolute,  // after the 60 days, the refresh token has to be experid
                    RefreshTokenUsage=TokenUsage.ReUse, // if the life time of the refresh token expires, it will be useless
                },
            };
    }
}