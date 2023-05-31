using Microsoft.AspNetCore.Mvc;
using SalesMS.Services.PhotoStock.PhotoStockApi.Dtos;
using SalesMS.Shared.SharedClass.BaseClasses;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Services.PhotoStock.PhotoStockApi.Controllers
{
    public class PhotoController : GenericBaseController
    {

        [HttpPost]
        public async Task<IActionResult> SavePhoto(IFormFile photo, CancellationToken canToken)
        {
            try
            {
                if (photo == null && photo.Length == 0)
                {
                    return BadRequest(GenericResponse<PhotoDto>.Fail("File is empty or null!", 400));
                }

                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/photos", photo.FileName);

                if (Path.Exists(path))
                {
                    throw new Exception("File already exists!") { };
                }

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await photo.CopyToAsync(stream, canToken);
                }

                var result = new PhotoDto { url = "photos/" + photo.FileName };

                return Ok(GenericResponse<PhotoDto>.Success(result, 200));

            }
            catch (Exception ex)
            {
                return BadRequest(GenericResponse<PhotoDto>.Fail(ex.Message, 404));
            }
        }

        [HttpPost("{fileName}")]
        public async Task<IActionResult> DeletePhoto(string fileName)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(fileName))
                {
                    throw new Exception("filename is empty or null!") { };
                }

                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/photos", fileName);

                if (!Path.Exists(path))
                {
                    throw new Exception("File does not exists!") { };
                }
                System.IO.File.Delete(path);
                return Ok(GenericResponse<PhotoDto>.Success(204));

            }
            catch (Exception ex)
            {
                return BadRequest(GenericResponse<PhotoDto>.Fail(ex.Message, 404));
            }
        }

    }
}
