using Microsoft.Extensions.DependencyInjection;
using SalesMS.Services.Order.OrderApplication.OrderMappingsAndRegisters;

namespace SalesMS.Services.Order.OrderApplication.Registrations
{
    public static class ServiceRegistrationForOrderAutoMapper
    {
        public static void OrderMappingRegistrationsForService(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(OrderMappingProfile));
        }
    }

}
