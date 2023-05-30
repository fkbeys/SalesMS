// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
                //var seed = true;
                //if (seed)
                //{
                //    args = args.Except(new[] { "/seed" }).ToArray();
                //}

                var host = CreateHostBuilder(args).Build();

                using (var scope = host.Services.CreateScope())
                {
                    var serviceProvider = scope.ServiceProvider;
                    var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

                    dbContext.Database.EnsureCreated();
                    dbContext.Database.Migrate();

                    var userManagerObj = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

                    if (!userManagerObj.Users.Any())
                    {
                        userManagerObj.CreateAsync(new ApplicationUser { UserName = "admin", Email = "admin@admin.com", }, "Password12*").Wait();
                    }
                }

                //if (seed)
                //{
                //    Log.Information("Seeding database...");
                //    var config = host.Services.GetRequiredService<IConfiguration>();
                //    var connectionString = config.GetConnectionString("DefaultConnection");
                //    SeedData.EnsureSeedData(connectionString);
                //    Log.Information("Done seeding database.");
                //    return 0;
                //}

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