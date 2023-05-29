using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SalesMS.Services.Catalog.CatalogApi.Models
{
    public class Category
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string name { get; set; }


    }
}
