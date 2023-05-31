using SalesMS.Services.Basket.BasketApi.NoSqlDb;
using StackExchange.Redis;

namespace SalesMS.Services.Basket.BasketApi.NoSqlDbService
{
    public class RedisService : INoSqlDbService
    {
        private readonly INoSqlDbSettings _noSqlDbSettings;
        private ConnectionMultiplexer? _connectionMultiplexer;

        public RedisService(INoSqlDbSettings noSqlDbSettings)
        {
            this._noSqlDbSettings = noSqlDbSettings;
            GetRedisDb(0);
        }

        private void connect()
        {
            _connectionMultiplexer = ConnectionMultiplexer.Connect($"{_noSqlDbSettings.Host}:{_noSqlDbSettings.Port}");
        }

        public IDatabase GetRedisDb(int dbNo)
        {
            connect();
            IDatabase database = _connectionMultiplexer.GetDatabase(dbNo);
            return database;
        }






    }
}
