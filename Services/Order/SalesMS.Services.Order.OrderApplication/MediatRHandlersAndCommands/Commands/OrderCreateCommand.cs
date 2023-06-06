using MediatR;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Commands
{
    public class OrderCreateCommand : IRequest<GenericResponse<CreatedOrderDto>>
    {
        public string buyerId { get; set; }
        public List<OrderItemDto> OrderItems { get; set; }
        public AddressDto address { get; set; }
    }


     
    



}
