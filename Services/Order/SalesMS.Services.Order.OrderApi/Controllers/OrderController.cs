using MediatR;
using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Order.OrderApplication.Dtos;
using SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Commands;
using SalesMS.Services.Order.OrderApplication.MediatRHandlersAndCommands.Queries;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.UserService;

namespace SalesMS.Services.Order.OrderApi.Controllers
{
    public class OrderController : GenericBaseController
    {
        private readonly IMediator _mediator;
        private readonly ISharedIdendityService _sharedIdendityService;

        public OrderController(IMediator mediator, ISharedIdendityService sharedIdendityService)
        {
            this._mediator = mediator;
            this._sharedIdendityService = sharedIdendityService;
        }


        [HttpGet]
        public async Task<IActionResult> GetOrders(CancellationToken canToken)
        {
            string userid = _sharedIdendityService.GetUserId() ?? "";
            var result = await _mediator.Send(new GetOrdersByUserIdQuery { userId = userid }, canToken);
            return ResponseResolver(result);
        }

        [HttpPost]
        public async Task<IActionResult> SaveOrders([FromBody] OrderModelDto order, CancellationToken canToken)
        {
            string userid = _sharedIdendityService.GetUserId() ?? "";
            var result = await _mediator.Send(new OrderCreateCommand { address = order.Address, buyerId = userid, OrderItems = order.OrderItems }, canToken);
            return ResponseResolver(result);
        }

    }
}
