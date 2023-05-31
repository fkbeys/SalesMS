using SalesMS.Services.Basket.BasketApi.Dtos;
using SalesMS.Services.Basket.BasketApi.NoSqlDbService;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Basket.BasketApi.BasketServices
{
    public class BasketService : IBasketService
    {
        private readonly INoSqlDbService noSqlDbService;

        public BasketService(INoSqlDbService noSqlDbService)
        {
            this.noSqlDbService = noSqlDbService;
        }
        public Task<GenericResponse<bool>> Delete(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<GenericResponse<BasketDto>> GetBasket(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<GenericResponse<bool>> SaveOrUpdate(BasketDto basket)
        {
            throw new NotImplementedException();
        }
    }
}
