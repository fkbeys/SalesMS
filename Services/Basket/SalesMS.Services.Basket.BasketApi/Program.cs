using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using SalesMS.Services.Basket.BasketApi.BasketServices;
using SalesMS.Services.Basket.BasketApi.StartUpExtentions;
using SalesMS.Shared.SharedClass.UserService;

var builder = WebApplication.CreateBuilder(args);

var conf = builder.Configuration;
// Add services to the container.



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.RegisterNoSqlDbSettings(conf);
builder.Services.AddScoped<IBasketService, BasketService>();
builder.Services.AddHttpContextAccessor();


builder.Services.AddScoped<ISharedIdendityService, SharedIdendityService>();

var authPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
 
builder.Services.AddControllers(opt =>
{
    opt.Filters.Add(new AuthorizeFilter(authPolicy));
});


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt =>
    {
        opt.Authority = conf["IdendityServerUrl"];
        opt.Audience = "resource_basket";
        opt.RequireHttpsMetadata = false;
    }
    );




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseAuthorization();
app.UseAuthentication();

app.MapControllers();

app.Run();
