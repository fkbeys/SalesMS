using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.Authorization;
using SalesMS.Services.Catalog.CatalogApi.Mappings;
using SalesMS.Services.Catalog.CatalogApi.StartupExtentions;

var builder = WebApplication.CreateBuilder(args);
IConfiguration conf = builder.Configuration;
// Add services to the container.

builder.Services.AddControllers(opt =>
{
    opt.Filters.Add(new AuthorizeFilter());

});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.RegisterDbSettings(conf);
builder.Services.RegisterDbServices();

builder.Services.AddAuthorization();

 
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt =>
    {
        opt.Authority = conf["IdendityServerUrl"];
        opt.Audience = "resource_catalog";
        opt.RequireHttpsMetadata = false;
    }
    );



builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();


//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
