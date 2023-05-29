using SalesMS.Services.Catalog.CatalogApi.Dtos.Category;

namespace SalesMS.Services.Catalog.CatalogApi.Dtos.Course
{
    public class CourseDto
    {
        public string id { get; set; }
        public string name { get; set; }
        public string decription { get; set; }
        public decimal price { get; set; }

        public string picture { get; set; }
        public DateTime createdDateTime { get; set; }

        public string userId { get; set; }
        public FeatureDto feature { get; set; }

        public string categoryId { get; set; }
        public CategoryDto category { get; set; }
    }
}
