using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class BaseController : ControllerBase
    {

        public IActionResult ResponseResolver<T>(GenericResponse<T> response)
        {
            if (response.isSuccess)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

    }
}
