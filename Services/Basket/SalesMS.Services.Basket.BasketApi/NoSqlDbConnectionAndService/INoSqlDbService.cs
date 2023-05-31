using StackExchange.Redis;

namespace SalesMS.Services.Basket.BasketApi.NoSqlDbService
{
    public interface INoSqlDbService
    {

        public IDatabase GetDb(int dbNo);
    }
}
