
using SalesMS.Services.Basket.BasketApi.Dtos;
using SalesMS.Services.Basket.BasketApi.NoSqlDbConnectionAndService;
using SalesMS.Shared.SharedClass.Dtos;
using System.Text.Json;

namespace SalesMS.Services.Basket.BasketApi.BasketServices
{
    public class BasketService : IBasketService
    {
        private readonly INoSqlDbService noSqlDbService;

        public BasketService(INoSqlDbService noSqlDbService)
        {
            this.noSqlDbService = noSqlDbService;
        }


        public async Task<GenericResponse<BasketDto>> GetBasket(string userId)
        {
            try
            {
                var basketsJsonString = await noSqlDbService.GetDb(1).StringGetAsync(userId);

                var tx = basketsJsonString.ToString();

                BasketDto? baskets = JsonSerializer.Deserialize<BasketDto>(tx);

                return GenericResponse<BasketDto>.Success(baskets, 200);
            }
            catch (Exception ex)
            {
                return GenericResponse<BasketDto>.Fail(ex.Message, 404);
            }
        }

        public async Task<GenericResponse<bool>> SaveOrUpdate(BasketDto basket)
        {
            try
            {
                var status = await noSqlDbService.GetDb(1).StringSetAsync(basket.userId, JsonSerializer.Serialize(basket));
                if (!status)
                {
                    throw new Exception("Error on SaveOrUpdate operation!") { };
                }
                return GenericResponse<bool>.Success(200);
            }
            catch (Exception ex)
            {
                return GenericResponse<bool>.Fail(ex.Message, 404);
            }
        }


        public async Task<GenericResponse<bool>> Delete(string userId)
        {
            try
            {
                var status = await noSqlDbService.GetDb(1).KeyDeleteAsync(userId);
                if (!status)
                {
                    throw new Exception("Error on delete operation!") { };
                }

                return GenericResponse<bool>.Success(200);
            }
            catch (Exception ex)
            {
                return GenericResponse<bool>.Fail(ex.Message, 404);
            }
        }


    }
}
