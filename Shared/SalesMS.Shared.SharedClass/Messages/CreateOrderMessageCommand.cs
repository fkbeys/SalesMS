using MassTransit;

namespace SalesMS.Shared.SharedClass.Messages
{
    public class CreateOrderMessageCommand
    {
        public string PaymentId { get; set; }
        public string BuyerId { get; set; }
        public string CourseId { get; set; }
    }

    public class CreateOrderMessageCommandConsumer : IConsumer<CreateOrderMessageCommand>
    {
        public async Task Consume(ConsumeContext<CreateOrderMessageCommand> context)
        {
            try
            {
                var message = context.Message;

                // Mesajın alındığını ve içeriğini kontrol etmek için konsola yazdırabilirsiniz.
                Console.WriteLine("Received CreateOrderMessageCommand:");
                Console.WriteLine($"PaymentId: {message.PaymentId}");
                Console.WriteLine($"BuyerId: {message.BuyerId}");
                Console.WriteLine($"CourseId: {message.CourseId}");
                Console.WriteLine();


                // Mesajı işleme aldıktan sonra dönüş yapabilirsiniz.
                await Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw new Exception("consume isleminde hata!!!!!!!!") { };
            }
        }
    }
}
