using SalesMS.Services.Discount.DiscountApi.Models;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Discount.DiscountApi.DiscountServices
{
    public interface IDiscountService
    {
        public Task<GenericResponse<List<DiscountModel>>> GetAll();
        public Task<GenericResponse<DiscountModel>> GetById(int id);

        public Task<GenericResponse<GenericNoContent>> Save(DiscountModel model);

        public Task<GenericResponse<GenericNoContent>> Update(DiscountModel model);

        public Task<GenericResponse<GenericNoContent>> Delete(int id);
        public Task<GenericResponse<DiscountModel>> GetByCodeAndUserId(string code, string userId);

    }
}
