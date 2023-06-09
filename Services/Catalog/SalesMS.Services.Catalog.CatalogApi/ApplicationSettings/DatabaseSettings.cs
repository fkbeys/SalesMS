﻿namespace SalesMS.Services.Catalog.CatalogApi.ApplicationSettings
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string? CourseCollectionName { get; set; }
        public string? CategoryCollectionName { get; set; }
        public string? ConnectionSettings { get; set; }
        public string? DatabaseName { get; set; }
    }
}
