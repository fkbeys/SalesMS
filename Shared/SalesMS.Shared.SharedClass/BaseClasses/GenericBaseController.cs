using Microsoft.AspNetCore.Mvc;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Shared.SharedClass.BaseClasses
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
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
