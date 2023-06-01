using Microsoft.Extensions.DependencyInjection;

namespace SalesMS.Services.Order.OrderApplication.OrderMappingsAndRegisters
{
    public static class ServiceRegistrationForMediatR
    {
        public static void ServiceRegistrationForMediatRForService(this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ServiceRegistrationForMediatR).Assembly));
        }
    }

}
