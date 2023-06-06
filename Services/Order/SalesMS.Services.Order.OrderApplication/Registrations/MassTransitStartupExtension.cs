using MassTransit;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SalesMS.Services.Order.OrderApplication.MessageConsumers;

namespace SalesMS.Shared.SharedClass.StartUpRegisters
{
    public static class MassTransitStartupExtension
    {
        public static void AddMassTransitExtension(this IServiceCollection services, IConfiguration conf)
        {
            string rabbitmqurl = conf["RabbitMQUrl"] ?? "";
            string username = conf["RabbitMQUserName"] ?? "";
            string pass = conf["RabbitMQPass"] ?? "";

            services.AddMassTransit(x =>
            {
                x.AddConsumer<PaymentSuccessfullMessageConsumer>();
                x.AddBus(provider => Bus.Factory.CreateUsingRabbitMq(config =>
                {
                    config.Host(new Uri(rabbitmqurl), h =>
                    {
                        h.Username(username);
                        h.Password(pass);
                    });

                    config.ReceiveEndpoint("ticketQueue", ep =>
                    {
                        ep.ConfigureConsumer<PaymentSuccessfullMessageConsumer>(provider);
                    });
                }));
            });
        }
    }
}
