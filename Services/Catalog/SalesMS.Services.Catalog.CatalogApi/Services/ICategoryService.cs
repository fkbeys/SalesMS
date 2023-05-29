using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Services
{
    public interface ICategoryService
    {
        public Task<GenericResponse<List<CategoryDto>>> GetAllAsync();
        public Task<GenericResponse<CategoryDto>> CreateAsync(CategoryDto categorydto);
        public Task<GenericResponse<CategoryDto>> FindByIdAsync(string id);
        public Task<GenericResponse<GenericNoContent>> UpdateAsync(CategoryDto courseDto);
        public Task<GenericResponse<GenericNoContent>> DeleteAsync(string courseDto);
    }
}
