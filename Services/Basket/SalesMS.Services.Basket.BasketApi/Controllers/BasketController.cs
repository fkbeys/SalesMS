using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Basket.BasketApi.BasketServices;
using SalesMS.Shared.SharedClass.BaseClasses;

namespace SalesMS.Services.Basket.BasketApi.Controllers
{
    public class BasketController : GenericBaseController
    {
        private readonly IBasketService basketService;

        public BasketController(IBasketService basketService)
        {
            this.basketService = basketService;
        }

        [HttpGet]
        public async Task<IActionResult> testdb()
        {
            var fff = basketService.GetBasket("");
            var tx = "";


            return Ok("");

        }


    }
}
