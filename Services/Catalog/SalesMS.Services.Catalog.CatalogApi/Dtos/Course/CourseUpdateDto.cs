namespace SalesMS.Services.Catalog.CatalogApi.Dtos.Course
{
    public class CourseUpdateDto
    {
        public string id { get; set; }
        public string name { get; set; }
        public string decription { get; set; }
        public decimal price { get; set; }
        public string userId { get; set; }
        public string picture { get; set; }
        public FeatureDto feature { get; set; }
        public string categoryId { get; set; }
    }
}
