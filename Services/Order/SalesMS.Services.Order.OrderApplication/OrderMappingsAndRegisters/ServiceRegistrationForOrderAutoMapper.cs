using Microsoft.Extensions.DependencyInjection;

namespace SalesMS.Services.Order.OrderApplication.OrderMappingsAndRegisters
{
    public static class ServiceRegistrationForOrderAutoMapper
    {
        public static void OrderMappingRegistrationsForService(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(OrderMappingProfile));
        }
    }

}
