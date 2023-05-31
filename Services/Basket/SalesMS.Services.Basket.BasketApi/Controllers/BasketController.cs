using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Basket.BasketApi.BasketServices;
using SalesMS.Services.Basket.BasketApi.Dtos;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.UserService;

namespace SalesMS.Services.Basket.BasketApi.Controllers
{
    public class BasketController : GenericBaseController
    {
        private readonly IBasketService basketService;
        private readonly ISharedIdendityService sharedIdendityService;

        public BasketController(IBasketService basketService, ISharedIdendityService sharedIdendityService)
        {
            this.basketService = basketService;
            this.sharedIdendityService = sharedIdendityService;
        }

        [HttpPost]
        public async Task<IActionResult> SaveOrUpdate([FromBody] BasketDto basketdto)
        {
            var userId = sharedIdendityService.GetUserId();
            basketdto.userId = userId;

            var result = await basketService.SaveOrUpdate(basketdto);
            return ResponseResolver(result);
        }


        [HttpDelete]
        public async Task<IActionResult> Delete()
        {
            var userId = sharedIdendityService.GetUserId();

            var result = await basketService.Delete(userId);
            return ResponseResolver(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetBasket()
        {
            var userId = sharedIdendityService.GetUserId();
            var result = await basketService.GetBasket(userId);
            return ResponseResolver(result);
        }

    }
}
