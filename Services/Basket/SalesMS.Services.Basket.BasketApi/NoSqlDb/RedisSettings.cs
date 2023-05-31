namespace SalesMS.Services.Basket.BasketApi.NoSqlDb
{
    public class RedisSettings : INoSqlDbSettings
    {
        public string Host { get; set; }
        public string Port { get; set; }
    }
}
