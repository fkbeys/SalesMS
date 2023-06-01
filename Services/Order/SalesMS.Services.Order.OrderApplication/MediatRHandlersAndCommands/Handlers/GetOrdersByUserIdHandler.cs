using MediatR;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Queries;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Handlers
{
    public class GetOrdersByUserIdHandler : IRequestHandler<GetOrdersByUserIdQuery, GenericResponse<List<OrderModelDto>>>
    {
        public GetOrdersByUserIdHandler()
        {
            
        }

        public Task<GenericResponse<List<OrderModelDto>>> Handle(GetOrdersByUserIdQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
