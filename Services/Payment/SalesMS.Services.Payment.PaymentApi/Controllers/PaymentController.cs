using MassTransit;
using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.Dtos;
using SalesMS.Shared.SharedClass.MessageConsumers;

namespace SalesMS.Services.Payment.PaymentApi.Controllers
{

    public class PaymentController : GenericBaseController
    {
        private readonly IBus _bus;

        public PaymentController(IBus bus)
        {
            this._bus = bus;
        }

        [HttpGet("{isSuccessfull}")]
        public async Task<IActionResult> MakePayment(string courseId, string userId, bool isSuccessfull)
        {
            if (isSuccessfull)
            {
                var result = GenericResponse<GenericNoContent>.Success(200);
                var ordermessage = new PaymentSuccessfullMessageCommand
                {
                    BuyerId = userId,
                    CourseId = courseId,
                    PaymentId = Guid.NewGuid().ToString()
                };
                await _bus.Publish(ordermessage);
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
