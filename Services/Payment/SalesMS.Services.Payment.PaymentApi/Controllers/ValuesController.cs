using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.BaseClasses;

namespace SalesMS.Services.Payment.PaymentApi.Controllers
{

    public class ValuesController : GenericBaseController
    {
        public ValuesController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> MakePayment()
        {


            //return ResponseResolver(null);
            return Ok();
        }



    }
}
