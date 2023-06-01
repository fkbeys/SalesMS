using AutoMapper;
using MediatR;
using SalesMs.Services.Order.OrderDomain.OrderAggregate;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Commands;
using SalesMS.Services.Order.OrderInfrastructure.DbContexts;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Handlers
{
    public class CreateOrderCommandHandler : IRequestHandler<OrderCreateCommand, GenericResponse<CreatedOrderDto>>
    {
        private readonly OrderDbContext _orderDbContext;
        private readonly IMapper _mapper;

        public CreateOrderCommandHandler(OrderDbContext orderDbContext, IMapper mapper)
        {
            this._orderDbContext = orderDbContext;
            this._mapper = mapper;
        }

        public async Task<GenericResponse<CreatedOrderDto>> Handle(OrderCreateCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var reqAdress = request.address;
                var newAdress = new Address(reqAdress.provience, reqAdress.district, reqAdress.street, reqAdress.zipcode);

                var newOrder = new OrderModel(request.buyerId, newAdress);


                foreach (var x in request.OrderItems)
                {
                    newOrder.Add(x.ProductId, x.ProductName, x.PictureUrl, x.Price);
                }

                await _orderDbContext.Orders.AddAsync(newOrder);
                await _orderDbContext.SaveChangesAsync();
                var create = new CreatedOrderDto { OrderId = newOrder.Id };

                return GenericResponse<CreatedOrderDto>.Success(create, 200);
            }
            catch (Exception ex)
            {
                return GenericResponse<CreatedOrderDto>.Fail(ex.Message, 400);
            }
        }
    }
}
