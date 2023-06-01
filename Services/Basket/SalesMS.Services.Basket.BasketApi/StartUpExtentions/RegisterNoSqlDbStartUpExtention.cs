using SalesMS.Services.Basket.BasketApi.NoSqlDb;
using SalesMS.Services.Basket.BasketApi.NoSqlDbConnectionAndService;

namespace SalesMS.Services.Basket.BasketApi.StartUpExtentions
{
    public static class RegisterNoSqlDbStartUpExtention
    {
        public static void RegisterNoSqlDbSettings(this IServiceCollection services, IConfiguration conf)
        {
            RedisSettings? dbSettings = conf.GetSection("NoSqlDbSettings").Get<RedisSettings>();
            if (dbSettings != null)
            {
                services.AddSingleton<INoSqlDbSettings>(dbSettings);
                services.AddSingleton<INoSqlDbService>(new RedisService(dbSettings));
            }
        }
    }
}
