using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SalesMS.Services.Order.OrderInfrastructure.DbContexts
{

    public static class ServiceRegistrationForOrderDbContext
    {
        public static void ServiceRegistrationForOrderDbContextSql(this IServiceCollection services, IConfiguration configuration)
        {
            var conn = configuration.GetConnectionString("SqlConnectionString");

            services.AddDbContext<OrderDbContext>(opt =>
            {
                opt.UseSqlServer(conn);
                opt.EnableSensitiveDataLogging();
            });
        }
    }
}
