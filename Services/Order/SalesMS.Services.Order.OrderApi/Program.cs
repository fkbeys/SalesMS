using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using SalesMS.Services.Order.OrderApplication.Registrations;
using SalesMS.Services.Order.OrderInfrastructure.DbContexts;
using SalesMS.Shared.SharedClass.UserService;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);

var conf = builder.Configuration;
var sqlConnString = conf.GetConnectionString("SqlConnectionString");

JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");

builder.Services.AddHttpContextAccessor();

builder.Services.AddScoped<ISharedIdendityService, SharedIdendityService>();

builder.Services.OrderMappingRegistrationsForService();
builder.Services.ServiceRegistrationForOrderDbContextSql(sqlConnString);
builder.Services.ServiceRegistrationForMediatRForService();

builder.Services.AddMassTransitExtension(conf);



var authPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();

builder.Services.AddControllers(opt =>
{
    opt.Filters.Add(new AuthorizeFilter(authPolicy));
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt =>
    {
        opt.Authority = conf["IdendityServerUrl"];
        opt.Audience = "resource_order";
        opt.RequireHttpsMetadata = false;
    }
    );

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
