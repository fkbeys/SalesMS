using MassTransit;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using SalesMS.Services.Payment.PaymentApi;
using SalesMS.Shared.SharedClass.UserService;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);

var conf = builder.Configuration;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");
builder.Services.AddHttpContextAccessor();

builder.Services.AddScoped<ISharedIdendityService, SharedIdendityService>();


builder.Services.Configure<MassTransitHostOptions>(options =>
{
    options.WaitUntilStarted = true;
    options.StartTimeout = TimeSpan.FromSeconds(30);
    options.StopTimeout = TimeSpan.FromMinutes(1);
});


var authPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();

builder.Services.AddControllers(opt =>
{
    //opt.Filters.Add(new AuthorizeFilter(authPolicy));
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt =>
    {
        opt.Authority = conf["IdendityServerUrl"];
        opt.Audience = "resource_payment";
        opt.RequireHttpsMetadata = false;
    }
    );

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMassTransitExtension(conf);

//string rabbitmqurl = conf["RabbitMQUrl"] ?? "";
//string username = conf["RabbitMQUserName"] ?? "";
//string pass = conf["RabbitMQPass"] ?? "";

//builder.Services.AddMassTransit((opt) =>
//{
//    opt.UsingRabbitMq((context, cfg) =>
//    {
//        cfg.Host(rabbitmqurl, host =>
//        {
//            host.Username(username);
//            host.Password(pass);
//        });  
//        cfg.ReceiveEndpoint("input-queue", e =>
//        {
//            e.Bind("exchange-name");
//            e.Bind<CreateOrderMessageCommandConsumer>();
//        });

//    });

//});

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseAuthentication();

app.MapControllers();

app.Run();
