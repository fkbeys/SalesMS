using StackExchange.Redis;

namespace SalesMS.Services.Basket.BasketApi.NoSqlDbConnectionAndService
{
    public interface INoSqlDbService
    {

        public IDatabase GetDb(int dbNo);
    }
}
