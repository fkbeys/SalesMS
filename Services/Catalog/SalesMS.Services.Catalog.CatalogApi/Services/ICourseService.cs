using SalesMS.Services.Catalog.CatalogApi.Dtos.Course;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Services
{
    public interface ICourseService
    {
        public Task<GenericResponse<List<CourseDto>>> GetAllAsync();
        public Task<GenericResponse<CourseCreateDto>> CreateAsync(CourseCreateDto courseDto);
        public Task<GenericResponse<CourseDto>> FindByIdAsync(string id);
        public Task<GenericResponse<List<CourseDto>>> GetAllByUserIdAsync(string userId);
        public Task<GenericResponse<GenericNoContent>> UpdateAsync(CourseDto courseDto);
        public Task<GenericResponse<GenericNoContent>> DeleteAsync(string id);
    }
}
