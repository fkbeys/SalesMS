using Microsoft.AspNetCore.Http;

namespace SalesMS.Shared.SharedClass.UserService
{
    public class SharedIdendityService : ISharedIdendityService
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public SharedIdendityService(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        public string? GetUserId()
        {
            //var userClaim = httpContextAccessor?.HttpContext?.User.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub);

            try
            {
                var user = httpContextAccessor?.HttpContext?.User?.FindFirst("sub")?.Value;
                if (user == null)
                {
                    var subFinder = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
                    user = httpContextAccessor?.HttpContext?.User?.FindFirst(subFinder)?.Value;
                }


                return user ?? "";
            }
            catch (Exception)
            {
                return "";
            }
        }

        // public string? GetUserId => httpContextAccessor?.HttpContext?.User?.FindFirst("sub")?.Value;
    }
}
