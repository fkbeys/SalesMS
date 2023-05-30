using Microsoft.AspNetCore.Mvc;

namespace SalesMS.Shared.SharedClass.Dtos
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
