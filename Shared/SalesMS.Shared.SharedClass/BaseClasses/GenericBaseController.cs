using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.Dtos;
using SalesMS.Shared.SharedClass.MiddlewareAndFilters;
using YashilDehliz.Api.MiddleWares;

namespace SalesMS.Shared.SharedClass.BaseClasses
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [ValidationErrorCatcher]
    [CustomExceptionFilterAttribute]
    public class GenericBaseController : ControllerBase
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
