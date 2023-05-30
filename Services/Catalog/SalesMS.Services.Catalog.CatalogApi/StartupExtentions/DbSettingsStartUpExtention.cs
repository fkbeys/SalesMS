using SalesMS.Services.Catalog.CatalogApi.ApplicationSettings;

namespace SalesMS.Services.Catalog.CatalogApi.StartupExtentions
{
    public static class DbSettingsStartUpExtention
    {
        public static void RegisterDbSettings(this IServiceCollection services, IConfiguration conf)
        {
            DatabaseSettings? dbSettings = conf.GetSection("DatabaseSettings").Get<DatabaseSettings>();
            if (dbSettings == null)
            {
                throw new Exception("Db settings can not be empty...") { };
            }
            services.AddSingleton<IDatabaseSettings>(dbSettings);
        }
    }
}
