namespace SalesMS.Shared.SharedClass.MessageConsumers
{ 

    public class PaymentSuccessfullMessageCommand
    {
        public string? PaymentId { get; set; }
        public string? BuyerId { get; set; }
        public string? CourseId { get; set; }
    }
     
}
