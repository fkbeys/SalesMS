namespace SalesMS.Services.Basket.BasketApi.Dtos
{
    public class BasketDto
    {
        public string userId { get; set; }
        public string discountCode { get; set; }


        public List<BasketItemDto> basketItem { get; set; }

        public decimal totalPrice => basketItem.Sum(x => x.price);

    }
}
