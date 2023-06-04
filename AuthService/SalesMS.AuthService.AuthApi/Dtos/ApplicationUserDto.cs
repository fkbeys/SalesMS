using SalesMS.AuthService.AuthApi.Models;
using System.Collections.Generic;

namespace SalesMS.AuthService.AuthApi.Dtos
{
    public class ApplicationUserDto : ApplicationUser
    {
        public IList<string> roles { get; set; }

    }
}
