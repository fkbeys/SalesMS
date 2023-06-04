using AutoMapper;
using MongoDB.Driver;
using SalesMS.Services.Catalog.CatalogApi.ApplicationSettings;
using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Services.Catalog.CatalogApi.Dtos.Course;
using SalesMS.Services.Catalog.CatalogApi.Models;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.Catalog.CatalogApi.CatalogServices
{
    public class CourseServices : ICourseService
    {

        private readonly IMongoCollection<Course> _CourseCollection;
        private readonly IMongoCollection<Category> _CategoryCollection;
        private readonly IMapper _mapper;


        public CourseServices(IDatabaseSettings databaseSettings, IMapper mapper)
        {
            MongoClient? client = new MongoClient(databaseSettings.ConnectionSettings);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            _CourseCollection = database.GetCollection<Course>(databaseSettings.CourseCollectionName);
            _mapper = mapper;
        }
        public async Task<GenericResponse<List<CourseDto>>> GetAllAsync()
        {
            try
            {
                var courses = await _CourseCollection.Find(x => true).ToListAsync();
                var coursesCnv = _mapper.Map<List<CourseDto>>(courses);

                if (!courses.Any())
                    courses = new List<Course>();

                foreach (var item in courses)
                {
                    try
                    {
                        var category = await _CategoryCollection.FindAsync(x => x.id == item.id);
                        if (category != null)
                        {
                            item.category = await category.FirstOrDefaultAsync();
                        }
                    }
                    catch (Exception)
                    {

                    }
                }

                 

                return GenericResponse<List<CourseDto>>.Success(coursesCnv, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<List<CourseDto>>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<CourseCreateDto>> CreateAsync(CourseCreateDto courseDto)
        {
            try
            {
                var newCourse = _mapper.Map<Course>(courseDto);
                newCourse.id = null;
                newCourse.createdDateTime = DateTime.Now;


                await _CourseCollection.InsertOneAsync(newCourse);
                return GenericResponse<CourseCreateDto>.Success(courseDto, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<CourseCreateDto>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<CourseDto>> FindByIdAsync(string id)
        {
            try
            {
                var findCourse = await _CourseCollection.Find(x => x.id == id).FirstOrDefaultAsync();
                if (findCourse == null)
                {
                    throw new Exception("Course not found!") { };
                }
                var course = _mapper.Map<CourseDto>(findCourse);

                try
                {

                    var category = await _CategoryCollection.Find(x => x.id == course.id).FirstOrDefaultAsync();
                    course.category = _mapper.Map<CategoryDto>(category);
                }
                catch (Exception)
                {

                }

                return GenericResponse<CourseDto>.Success(course, 200);

            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<CourseDto>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<List<CourseDto>>> GetAllByUserIdAsync(string userId)
        {
            try
            {
                var courses = await _CourseCollection.Find(x => x.userId == userId).ToListAsync();
                var coursesCnv = _mapper.Map<List<CourseDto>>(courses);

                if (!courses.Any())
                    courses = new List<Course>();

                foreach (var item in courses)
                {
                    item.category = await _CategoryCollection.Find(x => x.id == item.id).FirstOrDefaultAsync();
                }
                return GenericResponse<List<CourseDto>>.Success(coursesCnv, 200);
            }
            catch (Exception ex)
            {
                var errors = new List<string> { ex.Message, ex?.InnerException?.Message ?? "" };
                return GenericResponse<List<CourseDto>>.Fail(errors, 400);
            }
        }
        public async Task<GenericResponse<GenericNoContent>> UpdateAsync(CourseDto courseDto)
        {
            try
            {
                var newCourse = _mapper.Map<Course>(courseDto);
                newCourse.createdDateTime = DateTime.Now;


                var result = await _CourseCollection.FindOneAndReplaceAsync(x => x.id == courseDto.id, newCourse);

                if (result == null)
                {
                    throw new Exception("Course not found!") { };
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
                var result = await _CourseCollection.DeleteOneAsync(x => x.id == id);

                if (result.DeletedCount == 0)
                {
                    throw new Exception("Course not found!") { };
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
