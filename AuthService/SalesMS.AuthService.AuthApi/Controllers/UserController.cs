using Microsoft.AspNetCore.Mvc;
using SalesMS.AuthService.AuthApi.Dtos;
using SalesMS.AuthService.AuthApi.Services;
using SalesMS.Shared.SharedClass.Dtos;
using System.Threading.Tasks;

namespace SalesMS.AuthService.AuthApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UserController : GenericBaseController
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserCreateDto user)
        {
            var result = await userService.CreateAsync(user);
            return ResponseResolver<UserCreateDto>(result);
        }



    }
}
