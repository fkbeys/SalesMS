using Microsoft.EntityFrameworkCore;
using SalesMs.Services.Order.OrderDomain.OrderAggregate;

namespace SalesMS.Services.Order.OrderInfrastructure.DbContexts
{
    public class OrderDbContext : DbContext
    {
        public const string DEFAULT_SCHEMA = "Ordering";

        public DbSet<OrderModel> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public static bool dbCheck = false;

        public OrderDbContext(DbContextOptions<OrderDbContext> opt) : base(opt)
        {
            if (!dbCheck)
            {
                try
                {
                    //this.Database.EnsureCreated();
                    this.Database.Migrate();
                    dbCheck = true;
                }
                catch (Exception)
                {
                }
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<OrderModel>().ToTable("Orders", DEFAULT_SCHEMA);
            modelBuilder.Entity<OrderItem>().ToTable("OrderItems", DEFAULT_SCHEMA);

            modelBuilder.Entity<OrderModel>().OwnsOne(o => o.adress).WithOwner();



        }

    }
}
