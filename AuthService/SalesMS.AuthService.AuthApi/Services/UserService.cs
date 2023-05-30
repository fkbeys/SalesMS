using Microsoft.AspNetCore.Identity;
using SalesMS.AuthService.AuthApi.Dtos;
using SalesMS.AuthService.AuthApi.Models;
using SalesMS.Shared.SharedClass.Dtos;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace SalesMS.AuthService.AuthApi.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> userManager;
        public UserService(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }

        public async Task<GenericResponse<UserCreateDto>> CreateAsync(UserCreateDto user)
        {
            try
            {
                var result = await userManager.CreateAsync(new ApplicationUser
                {
                    UserName = user.username,
                    Email = user.email,

                }, user.password);

                if (!result.Succeeded)
                {
                    string errorsAsString = string.Join(", ", result.Errors.Select(x => x.Description));

                    return GenericResponse<UserCreateDto>.Fail(errorsAsString, 400);
                }
                return GenericResponse<UserCreateDto>.Success(400);

            }
            catch (Exception ex)
            {
                return GenericResponse<UserCreateDto>.Fail(ex.Message + " " + ex?.InnerException?.Message, 400);
            }

        }

        public async Task<GenericResponse<ApplicationUser>> FindUserById(string id)
        {
            try
            {
                var user = await userManager.FindByIdAsync(id);
                return GenericResponse<ApplicationUser>.Success(user, 200);
            }
            catch (Exception ex)
            {
                return GenericResponse<ApplicationUser>.Fail(ex.Message, 400);
            }
        }

    }
}
