using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Payment.PaymentApi.Controllers
{

    public class PaymentController : GenericBaseController
    {
        public PaymentController()
        {

        }



        /// <summary>
        /// this payment method is a fake one,  
        /// </summary>
        /// <param name="isSuccessfull"></param>
        /// <returns>to test the application, the isSuccessfull parameter will help you to get
        /// is payment successfull or not.  </returns>
        [HttpGet("{isSuccessfull}")]
        public async Task<IActionResult> MakePayment(bool isSuccessfull)
        {
            if (isSuccessfull)
            {
                var result = GenericResponse<GenericNoContent>.Success(200);
                return ResponseResolver(result);
            }
            else
            {
                var result = GenericResponse<GenericNoContent>.Fail("Payment declined", 200);
                return ResponseResolver(result);
            }



        }



    }
}
