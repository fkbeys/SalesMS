﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SalesMS.AuthService.AuthApi.Data;
using SalesMS.AuthService.AuthApi.Models;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using System;
using System.Linq;

namespace SalesMS.AuthService.AuthApi
{
    public class Program
    {
        public static int Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
                .MinimumLevel.Override("Microsoft.Hosting.Lifetime", LogEventLevel.Information)
                .MinimumLevel.Override("System", LogEventLevel.Warning)
                .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
                .Enrich.FromLogContext()

                .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Code)
                .CreateLogger();


            try
            {


                var host = CreateHostBuilder(args).Build();

                using (var scope = host.Services.CreateScope())
                {
                    var serviceProvider = scope.ServiceProvider;
                    var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

                    dbContext.Database.EnsureCreated();
                    //dbContext.Database.Migrate();

                    var rolesManagerObj = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                    if (!rolesManagerObj.Roles.Any())
                    {
                        rolesManagerObj.CreateAsync(new IdentityRole { Name = "User" }).Wait();
                        rolesManagerObj.CreateAsync(new IdentityRole { Name = "Admin" }).Wait();
                    }


                    var userManagerObj = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                    if (!userManagerObj.Users.Any())
                    {
                        var newUser = new ApplicationUser { UserName = "admin", Email = "admin@admin.com" };
                        userManagerObj.CreateAsync(newUser, "Password12*").Wait();

                        // var newAdminUser = userManagerObj.FindByEmailAsync(newUser.Email); 
                        userManagerObj.AddToRoleAsync(newUser, "Admin").Wait();
                    }
                }

                Log.Information("Starting host...");
                host.Run();
                return 0;
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly.");
                return 1;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}