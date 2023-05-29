using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SalesMS.Services.Catalog.CatalogApi.Models
{
    internal class Course
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }


        public string name { get; set; }

        public string decription { get; set; }




        [BsonRepresentation(BsonType.Decimal128)]
        public decimal price { get; set; }




        public string picture { get; set; }


        [BsonRepresentation(BsonType.DateTime)]
        public DateTime createdDateTime { get; set; }

        public string userId { get; set; }


        public Feature feature { get; set; }




        [BsonRepresentation(BsonType.ObjectId)]
        public string categoryId { get; set; }


        [BsonIgnore]
        public Category category { get; set; }

    }
}
