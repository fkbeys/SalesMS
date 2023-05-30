using SalesMS.AuthService.AuthApi.Dtos;
using SalesMS.Shared.SharedClass.Dtos;
using System.Threading.Tasks;

namespace SalesMS.AuthService.AuthApi.Services
{
    public interface IUserService
    {
        public Task<GenericResponse<UserCreateDto>> CreateAsync(UserCreateDto userCreateDto);
    }
}
