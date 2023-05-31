using AutoMapper;
using MongoDB.Driver;
using SalesMS.Services.Catalog.CatalogApi.ApplicationSettings;
using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Services.Catalog.CatalogApi.Models;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.CatalogServices
{
    public class CategoryService : ICategoryService
    {

        private readonly IMongoCollection<Category> _categoryCollection;
        private readonly IMapper _mapper;

        public CategoryService(IDatabaseSettings databaseSettings, IMapper mapper)
        {
            MongoClient? client = new MongoClient(databaseSettings.ConnectionSettings);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            _categoryCollection = database.GetCollection<Category>(databaseSettings.CategoryCollectionName);
            _mapper = mapper;
        }
        public async Task<GenericResponse<List<CategoryDto>>> GetAllAsync()
        {
            try
            {
                var categories = await _categoryCollection.Find(x => true).ToListAsync();
                var categoriesCnv = _mapper.Map<List<CategoryDto>>(categories);

                return GenericResponse<List<CategoryDto>>.Success(categoriesCnv, 200);

            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<List<CategoryDto>>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<CategoryDto>> CreateAsync(CategoryDto categorydto)
        {
            try
            {
                categorydto.id = null;
                var newCategory = _mapper.Map<Category>(categorydto);
                await _categoryCollection.InsertOneAsync(newCategory);
                return GenericResponse<CategoryDto>.Success(categorydto, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<CategoryDto>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<CategoryDto>> FindByIdAsync(string id)
        {
            try
            {
                var findCategory = await _categoryCollection.Find(x => x.id == id).FirstOrDefaultAsync();
                if (findCategory == null)
                {
                    throw new Exception("Category not found!") { };
                }
                var categoryDto = _mapper.Map<CategoryDto>(findCategory);
                return GenericResponse<CategoryDto>.Success(categoryDto, 200);

            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<CategoryDto>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<GenericNoContent>> UpdateAsync(CategoryDto courseDto)
        {
            try
            {
                var category = _mapper.Map<Category>(courseDto);

                var result = await _categoryCollection.FindOneAndReplaceAsync(x => x.id == courseDto.id, category);

                if (result == null)
                {
                    throw new Exception("Category not found!") { };
                }

                return GenericResponse<GenericNoContent>.Success(null, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<GenericNoContent>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<GenericNoContent>> DeleteAsync(string id)
        {
            try
            {
                var result = await _categoryCollection.DeleteOneAsync(x => x.id == id);

                if (result.DeletedCount == 0)
                {
                    throw new Exception("Category not found!") { };
                }

                return GenericResponse<GenericNoContent>.Success(null, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<GenericNoContent>.Fail(errors, 400);
            }
        }
    }
}
