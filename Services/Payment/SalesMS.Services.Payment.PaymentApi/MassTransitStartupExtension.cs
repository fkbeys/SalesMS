using MassTransit;
using SalesMS.Shared.SharedClass.Messages;

namespace SalesMS.Services.Payment.PaymentApi
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
                x.AddConsumer<CreateOrderMessageCommandConsumer>();
                x.AddBus(provider => Bus.Factory.CreateUsingRabbitMq(config =>
                {
                  
                    config.Host(new Uri(rabbitmqurl), h =>
                    {
                        h.Username(username);
                        h.Password(pass);
                    });

                    config.ReceiveEndpoint("ticketQueue", ep =>
                    {
                        ep.ConfigureConsumer<CreateOrderMessageCommandConsumer>(provider);
                    });
                }));
            }); 
        }
    }
}
