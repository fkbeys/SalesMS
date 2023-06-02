using Microsoft.AspNetCore.Authentication.JwtBearer;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);


var conf = builder.Configuration;
 JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");
 builder.Services.AddHttpContextAccessor();
 
// Add configuration sources
builder.Configuration
    .SetBasePath(builder.Environment.ContentRootPath)
     .AddJsonFile("ocelot.json")
    //.AddJsonFile("ocelot.json", optional: true, reloadOnChange: true)
    //.AddJsonFile($"ocelot.{builder.Environment.EnvironmentName}.json", optional: true)
    .AddEnvironmentVariables();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer("GatewayAuthenticationScheme",
    opt =>
    {
        opt.Authority = conf["IdendityServerUrl"];
        opt.Audience = "resource_gateway";
        opt.RequireHttpsMetadata = false;
    }
    );
 
// Add services to the container
builder.Services.AddOcelot(builder.Configuration);

// Build the application
var app = builder.Build();

app.UseAuthorization();
app.UseAuthentication();

// Configure middleware
app.UseOcelot().Wait();

// Run the application
app.Run();
