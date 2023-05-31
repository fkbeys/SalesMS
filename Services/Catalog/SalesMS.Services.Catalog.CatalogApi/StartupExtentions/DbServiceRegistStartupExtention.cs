using SalesMS.Services.Catalog.CatalogApi.CatalogServices;

namespace SalesMS.Services.Catalog.CatalogApi.StartupExtentions
{
    public static class DbServiceRegistStartupExtention
    {
        public static void RegisterDbServices(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ICourseService, CourseServices>();
        }
    }
}
