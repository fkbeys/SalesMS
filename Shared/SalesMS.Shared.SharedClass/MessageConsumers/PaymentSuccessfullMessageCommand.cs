using MassTransit;

namespace SalesMS.Services.Order.OrderApplication.MessageConsumers
{
    //internal class PaymentSuccessfullMessageConsumer
    //{
    //}

    public class PaymentSuccessfullMessageCommand
    {
        public string? PaymentId { get; set; }
        public string? BuyerId { get; set; }
        public string? CourseId { get; set; }
    }

    //public class PaymentSuccessfullMessageConsumer : IConsumer<PaymentSuccessfullMessageCommand>
    //{
    //    public virtual async Task Consume(ConsumeContext<PaymentSuccessfullMessageCommand> context)
    //    {
    //        var data = context.Message;
    //        var tx = data;
    //    }
    //}
}
