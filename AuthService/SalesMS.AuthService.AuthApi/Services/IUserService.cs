using SalesMS.AuthService.AuthApi.Dtos;
using SalesMS.AuthService.AuthApi.Models;
using SalesMS.Shared.SharedClass.Dtos;
using System.Threading.Tasks;

namespace SalesMS.AuthService.AuthApi.Services
{
    public interface IUserService
    {
        public Task<GenericResponse<UserCreateDto>> CreateAsync(UserCreateDto userCreateDto);
        public Task<GenericResponse<ApplicationUser>> FindUserById(string id);
    }
}
