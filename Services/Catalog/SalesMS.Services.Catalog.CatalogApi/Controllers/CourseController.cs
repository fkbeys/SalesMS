using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Catalog.CatalogApi.CatalogServices;
using SalesMS.Services.Catalog.CatalogApi.Dtos.Course;
using SalesMS.Shared.SharedClass.BaseClasses;

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
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var data = await _courseService.GetAllAsync();
            return ResponseResolver(data);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CourseCreateDto courseDto)
        {
            var data = await _courseService.CreateAsync(courseDto);
            return ResponseResolver(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> FindByIdAsync(string id)
        {
            var data = await _courseService.FindByIdAsync(id);
            return ResponseResolver(data);
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetAllByUserIdAsync(string userId)
        {
            var data = await _courseService.GetAllByUserIdAsync(userId);
            return ResponseResolver(data);
        }
        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] CourseDto courseDto)
        {
            var data = await _courseService.UpdateAsync(courseDto);
            return ResponseResolver(data);
        }
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var data = await _courseService.DeleteAsync(id);
            return ResponseResolver(data);
        }


    }
}
