using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace SalesMS.Services.Order.OrderInfrastructure.DbContexts
{

    public static class ServiceRegistrationForOrderDbContext
    {
        public static void ServiceRegistrationForOrderDbContextSql(this IServiceCollection services, string connectionString)
        {
            //var conn = configuration.GetConnectionString("SqlConnectionString");

            services.AddDbContext<OrderDbContext>(opt =>
            {
                opt.UseSqlServer(connectionString, conf =>
                {
                    //conf.MigrationsAssembly("");
                });
                opt.EnableSensitiveDataLogging();

            });
        }
    }
}
