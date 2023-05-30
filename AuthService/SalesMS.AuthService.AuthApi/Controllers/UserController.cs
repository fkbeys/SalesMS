using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SalesMS.AuthService.AuthApi.Dtos;
using SalesMS.AuthService.AuthApi.Services;
using SalesMS.Shared.SharedClass.Dtos;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using static IdentityServer4.IdentityServerConstants;

namespace SalesMS.AuthService.AuthApi.Controllers
{

    [Authorize(LocalApi.PolicyName)]
    public class UserController : GenericBaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserCreateDto user)
        {
            var result = await _userService.CreateAsync(user);
            return ResponseResolver<UserCreateDto>(result);
        }


        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var userClaim = User.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub);

            if (userClaim == null)
            {
                return BadRequest();
            }

            var user = await _userService.FindUserById(userClaim.Value);
            return ResponseResolver(user);
        }


    }
}
