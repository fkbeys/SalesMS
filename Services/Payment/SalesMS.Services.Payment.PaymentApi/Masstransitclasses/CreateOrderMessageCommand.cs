//using MassTransit;

//namespace SalesMS.Shared.SharedClass.Messages
//{
//    public class CreateOrderMessageCommand
//    {
//        public string? PaymentId { get; set; }
//        public string? BuyerId { get; set; }
//        public string? CourseId { get; set; }
//    }

//    public class CreateOrderMessageCommandConsumer : IConsumer<CreateOrderMessageCommand>
//    {
//        public async Task Consume(ConsumeContext<CreateOrderMessageCommand> context)
//        {
//            var data = context.Message;
//            var tx = data;
//        }
//    }
//}
