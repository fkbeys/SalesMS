using SalesMS.Services.Catalog.CatalogApi.Mappings;
using SalesMS.Services.Catalog.CatalogApi.Services;
using SalesMS.Services.Catalog.CatalogApi.StartupExtentions;

var builder = WebApplication.CreateBuilder(args);
IConfiguration conf = builder.Configuration;
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.RegisterDbSettings(conf);
builder.Services.RegisterDbServices();


builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
