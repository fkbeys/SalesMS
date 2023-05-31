using SalesMS.Services.Basket.BasketApi.Dtos;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Basket.BasketApi.BasketServices
{
    public interface IBasketService
    {
        public Task<GenericResponse<BasketDto>> GetBasket(string userId);
        public Task<GenericResponse<bool>> SaveOrUpdate(BasketDto basket);
        public Task<GenericResponse<bool>> Delete(string userId);
    }
}
