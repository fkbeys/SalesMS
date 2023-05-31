using Dapper.Contrib.Extensions;

namespace SalesMS.Services.Discount.DiscountApi.Models
{
    [Table("Discount")]
    public class DiscountModel
    {
        public int id { get; set; }
        public string userid { get; set; }
        public int rate { get; set; }
        public string code { get; set; }
        public DateTime createdate { get; set; }

    }
}
