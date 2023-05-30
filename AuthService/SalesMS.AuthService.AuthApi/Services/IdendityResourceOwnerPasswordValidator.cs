using IdentityModel;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using SalesMS.AuthService.AuthApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SalesMS.AuthService.AuthApi.Services
{
    public class IdendityResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public IdendityResourceOwnerPasswordValidator(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            var existUser = await _userManager.FindByNameAsync(context.UserName);

            var errors = new Dictionary<string, object>();
            errors.Add("errors", new List<string> { "Email or Password Error!" });

            if (existUser == null)
            {
                context.Result.CustomResponse = errors;
                return;
            }

            var passCheck = await _userManager.CheckPasswordAsync(existUser, context.Password);
            if (passCheck == false)
            {
                context.Result.CustomResponse = errors;
                return;
            }

            context.Result = new GrantValidationResult(existUser.Id.ToString(), OidcConstants.AuthenticationMethods.Password);



        }
    }
}
