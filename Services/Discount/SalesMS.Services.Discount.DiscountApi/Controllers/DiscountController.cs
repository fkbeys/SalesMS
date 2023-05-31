using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Discount.DiscountApi.DiscountServices;
using SalesMS.Services.Discount.DiscountApi.Models;
using SalesMS.Shared.SharedClass.BaseClasses;

namespace SalesMS.Services.Discount.DiscountApi.Controllers
{
    public class DiscountController : GenericBaseController
    {
        private readonly IDiscountService discountService;

        public DiscountController(IDiscountService discountService)
        {
            this.discountService = discountService;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await discountService.GetAll();
            return ResponseResolver(data);
        }


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] DiscountModel model)
        {
            var data = await discountService.Save(model);
            return ResponseResolver(data);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] DiscountModel model)
        {
            var data = await discountService.Update(model);
            return ResponseResolver(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await discountService.Delete(id);
            return ResponseResolver(data);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var data = await discountService.GetById(id);
            return ResponseResolver(data);
        }

        [HttpGet("{code}/{userId}")]
        public async Task<IActionResult> GetById(string code, string userId)
        {
            var data = await discountService.GetByCodeAndUserId(code, userId);
            return ResponseResolver(data);
        }


    }
}
