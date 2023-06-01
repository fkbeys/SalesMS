using SalesMS.Services.Order.OrderCore;

namespace SalesMs.Services.Order.OrderDomain.OrderAggregate
{

    // Owned types
    // Shadow Property
    // Backing Field

    public class OrderModel : Entity, IAggregateRoot
    {
        public DateTime createDate { get; private set; }
        public Address adress { get; private set; }
        public string buyerId { get; private set; }

        private readonly List<OrderItem> _orderItems;
        public IReadOnlyCollection<OrderItem> OrderItems => _orderItems;

        public OrderModel()
        {
            
        }

        public OrderModel(string _buyerId, Address _adress)
        {
            _orderItems = new List<OrderItem>();
            createDate = DateTime.UtcNow;
            buyerId = _buyerId;
            adress = _adress;
        }

        public void Add(string productId, string productName, string pictureUrl, decimal price)
        {
            var isExist = _orderItems.Any(x => x.productId == productId);
            if (!isExist)
            {
                _orderItems.Add(new OrderItem(productId, productName, pictureUrl, price));
            }
        }

        public decimal GetTotal => _orderItems.Sum(x => x.price);




    }
}
