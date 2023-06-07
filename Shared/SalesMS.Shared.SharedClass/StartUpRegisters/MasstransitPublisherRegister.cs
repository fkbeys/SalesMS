using MassTransit;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SalesMS.Shared.SharedClass.StartUpRegisters
{
    public static class MasstransitPublisherRegister
    {
        public static void MasstransitPublisherRegisterationExtention(this IServiceCollection services, IConfiguration conf)
        {
            string rabbitmqurl = conf["RabbitMQUrl"] ?? "";
            string username = conf["RabbitMQUserName"] ?? "";
            string pass = conf["RabbitMQPass"] ?? "";

            services.AddMassTransit(x =>
            {
                x.AddBus(provider => Bus.Factory.CreateUsingRabbitMq(config =>
                {
                    config.Host(new Uri(rabbitmqurl), h =>
                    {
                        h.Username(username);
                        h.Password(pass);
                    });
                }));
            });
        }
    }
}
