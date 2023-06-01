using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Queries;
using SalesMS.Services.Order.OrderInfrastructure.DbContexts;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Handlers
{
    public class GetOrdersByUserIdHandler : IRequestHandler<GetOrdersByUserIdQuery, GenericResponse<List<OrderModelDto>>>
    {
        private readonly OrderDbContext _orderDbContext;
        private readonly IMapper _mapper;

        public GetOrdersByUserIdHandler(OrderDbContext orderDbContext, IMapper mapper)
        {
            this._orderDbContext = orderDbContext;
            this._mapper = mapper;
        }

        public async Task<GenericResponse<List<OrderModelDto>>> Handle(GetOrdersByUserIdQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var first = await _orderDbContext.Orders.ToListAsync();
                var orders = await _orderDbContext.Orders.Include(x => x.OrderItems).Where(f => f.buyerId == request.userId).ToListAsync();
                var mappedOrders = _mapper.Map<List<OrderModelDto>>(orders);

                return GenericResponse<List<OrderModelDto>>.Success(mappedOrders, 200);
            }
            catch (Exception ex)
            {
                return GenericResponse<List<OrderModelDto>>.Fail(ex?.Message + " " + ex?.InnerException?.Message, 400);
            }
        }
    }
}
