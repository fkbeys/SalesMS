using AutoMapper;
using MongoDB.Driver;
using SalesMS.Services.Catalog.CatalogApi.AppSettings;
using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Services.Catalog.CatalogApi.Models;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.Services
{
    internal class CategoryService : ICategoryServices
    {

        private readonly IMongoCollection<Category> _categoryCollection;
        private readonly IMapper _mapper;


        internal CategoryService(IDatabaseSettings databaseSettings, IMapper mapper)
        {
            MongoClient? client = new MongoClient(databaseSettings.ConnectionSettings);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            _categoryCollection = database.GetCollection<Category>(databaseSettings.CategoryCollectionName);
            _mapper = mapper;
        }

        public async Task<GenericResponse<List<CategoryDto>>> GetAll()
        {
            var result = new GenericResponse<List<CategoryDto>>();

            try
            {
                var categories = await _categoryCollection.Find(x => true).ToListAsync();
                var categoriesCnv = _mapper.Map<List<CategoryDto>>(categories);

                return GenericResponse<List<CategoryDto>>.Success(categoriesCnv, 200);

            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, "", "" };
                return GenericResponse<List<CategoryDto>>.Fail(errors, 400);

            }
            return result;
        }








    }
}
