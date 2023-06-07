using MassTransit;
using SalesMS.Shared.SharedClass.MessageConsumers;

namespace SalesMS.Services.Order.OrderApplication.MessageConsumers
{
    public class PaymentSuccessfullMessageConsumer : IConsumer<PaymentSuccessfullMessageCommand>
    {
        //TODO: Create order after payment. ( automatic )
        public async Task Consume(ConsumeContext<PaymentSuccessfullMessageCommand> context)
        {
            var data = context.Message;
            //after successfully payment, we create an automatic order.
            //create order etc///

            var tx = data;
        }
    }
}
