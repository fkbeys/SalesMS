using AutoMapper;
using SalesMs.Services.Order.OrderDomain.OrderAggregate;
using SalesMS.Services.Order.OrderApplication.Dtos;

namespace SalesMS.Services.Order.OrderApplication.MappingProfiles
{
    public class OrderMappingProfile : Profile
    {
        public OrderMappingProfile()
        {
            CreateMap<OrderModel, OrderModelDto>().ReverseMap();
            CreateMap<OrderItem, OrderItemDto>().ReverseMap();
            CreateMap<Address, AddressDto>().ReverseMap();
        }

    }
}
