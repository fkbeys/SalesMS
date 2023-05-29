using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SalesMS.Services.Catalog.CatalogApi.Models
{
    internal class Category
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string name { get; set; }
    }
}
