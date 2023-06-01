using Microsoft.EntityFrameworkCore;
using SalesMs.Services.Order.OrderDomain.OrderAggregate;

namespace SalesMS.Services.Order.OrderInfrastructure.DbContexts
{
    public class OrderDbContext : DbContext
    {
        public const string DEFAULT_SCHEMA = "Ordering";

        public DbSet<OrderModel> Orders;
        public DbSet<OrderItem> OrderItems;

        public OrderDbContext(DbContextOptions<OrderDbContext> opt) : base(opt)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderModel>().ToTable("Orders", DEFAULT_SCHEMA);
            modelBuilder.Entity<OrderItem>().ToTable("Orders", DEFAULT_SCHEMA);

            modelBuilder.Entity<OrderModel>().OwnsOne(o => o.adress).WithOwner();


            base.OnModelCreating(modelBuilder);
        }

    }
}
