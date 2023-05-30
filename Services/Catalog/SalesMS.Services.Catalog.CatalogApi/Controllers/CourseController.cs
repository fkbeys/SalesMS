using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Catalog.CatalogApi.Dtos.Course;
using SalesMS.Services.Catalog.CatalogApi.Services;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Controllers
{ 
    public class CourseController : GenericBaseController
    {
        private readonly ICourseService _courseService;

        public CourseController(ICourseService courseService)
        {
            this._courseService = courseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _courseService.GetAllAsync();
            return ResponseResolver(data as dynamic);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CourseCreateDto courseDto)
        {
            var data = await _courseService.CreateAsync(courseDto);
            return ResponseResolver(data as dynamic);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> FindByIdAsync(string id)
        {
            var data = await _courseService.FindByIdAsync(id);
            return ResponseResolver(data as dynamic);
        }

        [HttpPost]
        public async Task<IActionResult> GetAllByUserIdAsync(string id)
        {
            var data = await _courseService.GetAllByUserIdAsync(id);
            return ResponseResolver(data as dynamic);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] CourseDto courseDto)
        {
            var data = await _courseService.UpdateAsync(courseDto);
            return ResponseResolver(data as dynamic);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var data = await _courseService.DeleteAsync(id);
            return ResponseResolver(data as dynamic);
        }


    }
}
