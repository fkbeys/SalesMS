namespace SalesMS.AuthService.AuthApi.Dtos
{
    public class UserCreateDto
    {
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
    }
}
