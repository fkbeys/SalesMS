using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.Dtos;
using SalesMS.Shared.SharedClass.UserService;

namespace SalesMS.Services.Order.OrderApi.Controllers
{

    public class ValuesController : GenericBaseController
    {
        private readonly ISharedIdendityService sharedIdendityService;

        public ValuesController(ISharedIdendityService sharedIdendityService)
        {
            this.sharedIdendityService = sharedIdendityService;
        }


        [HttpGet]
        public async Task<IActionResult> GetData()
        {
            var data = new GenericResponse<string>();

            return ResponseResolver(data);
        }

    }
}
