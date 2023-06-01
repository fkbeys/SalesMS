using MediatR;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Queries
{
    public class GetOrdersByUserIdQuery : IRequest<GenericResponse<List<OrderModelDto>>>
    {
        public string userId { get; set; }
    }
}
