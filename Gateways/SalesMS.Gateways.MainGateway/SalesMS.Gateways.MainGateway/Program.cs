using Microsoft.AspNetCore.Authentication.JwtBearer;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);


var conf = builder.Configuration;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");
builder.Services.AddHttpContextAccessor();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers(opt =>
{
    // opt.Filters.Add(new AuthorizeFilter());

});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
        });
});


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
app.UseCors();
app.UseAuthorization();
app.UseAuthentication();

// Configure middleware


app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

// Run the application
app.UseOcelot().Wait();
app.Run();
