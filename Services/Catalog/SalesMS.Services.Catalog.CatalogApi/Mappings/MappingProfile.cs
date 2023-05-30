using AutoMapper;
using SalesMS.Services.Catalog.CatalogApi.Dtos;
using SalesMS.Services.Catalog.CatalogApi.Dtos.Course;
using SalesMS.Services.Catalog.CatalogApi.Models;

namespace SalesMS.Services.Catalog.CatalogApi.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Course, CourseDto>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<Feature, FeatureDto>().ReverseMap();
            CreateMap<Course, CourseCreateDto>().ReverseMap();
            CreateMap<Course, CourseUpdateDto>().ReverseMap();
        }
    }

}
