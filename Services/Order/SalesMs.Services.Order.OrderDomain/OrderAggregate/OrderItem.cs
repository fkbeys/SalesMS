using SalesMS.Services.Order.OrderCore;

namespace SalesMs.Services.Order.OrderDomain.OrderAggregate
{
    public class OrderItem : Entity
    {
        public string productId { get; private set; }
        public string productName { get; private set; }
        public string pictureUrl { get; private set; }
        public decimal price { get; private set; }

        public OrderItem(string productId, string productName, string pictureUrl, decimal price)
        {
            this.productId = productId;
            this.productName = productName;
            this.pictureUrl = pictureUrl;
            this.price = PriceControl(price);
        }

        public void updateOrder(string productName, string pictureUrl, decimal price)
        {
            this.productName = productName;
            this.pictureUrl = pictureUrl;
            this.price = PriceControl(price);
        }


        private decimal PriceControl(decimal _price)
        {
            //price control. if the price is below 1, then we return 1. 
            //business logic
            return _price < 1 ? 1 : _price;
        }



    }
}
