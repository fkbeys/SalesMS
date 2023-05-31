using SalesMS.Services.Basket.BasketApi.NoSqlDb;
using StackExchange.Redis;

namespace SalesMS.Services.Basket.BasketApi.NoSqlDbService
{
    public interface INoSqlDbService
    {

        public IDatabase GetRedisDb(int dbNo);
    }
}
