using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Services.Catalog.CatalogApi.Services;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Controllers
{
    // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CategoryController : GenericBaseController
    {
        private readonly ICategoryService _CategoryService;

        public CategoryController(ICategoryService CategoryService)
        {
            this._CategoryService = CategoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _CategoryService.GetAllAsync();
            return ResponseResolver(data as dynamic);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CategoryDto CategoryDto)
        {
            var data = await _CategoryService.CreateAsync(CategoryDto);
            return ResponseResolver(data as dynamic);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> FindByIdAsync(string id)
        {
            var data = await _CategoryService.FindByIdAsync(id);
            return ResponseResolver(data as dynamic);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] CategoryDto CategoryDto)
        {
            var data = await _CategoryService.UpdateAsync(CategoryDto);
            return ResponseResolver(data as dynamic);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var data = await _CategoryService.DeleteAsync(id);
            return ResponseResolver(data as dynamic);
        }


    }
}
