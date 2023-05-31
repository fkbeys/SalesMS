using Dapper;
using Npgsql;
using SalesMS.Services.Discount.DiscountApi.Models;
using SalesMS.Shared.SharedClass.Dtos;
using System.Data;

namespace SalesMS.Services.Discount.DiscountApi.DiscountServices
{
    public class DiscountService : IDiscountService
    {
        private readonly IConfiguration configuration;
        private readonly IDbConnection dbConnection;

        public DiscountService(IConfiguration configuration)
        {
            this.configuration = configuration;
            dbConnection = new NpgsqlConnection(configuration.GetConnectionString("PostgreSql"));
        }

        public async Task<GenericResponse<List<DiscountModel>>> GetAll()
        {
            try
            {
                string query = "select * from Discount";
                var discounts = await dbConnection.QueryAsync<DiscountModel>(query);

                return GenericResponse<List<DiscountModel>>.Success(discounts.ToList(), 200);

            }
            catch (Exception ex)
            {
                return GenericResponse<List<DiscountModel>>.Fail(ex.Message, 400);
            }
        }

        public async Task<GenericResponse<DiscountModel>> GetById(int id)
        {
            try
            {
                var discount = await dbConnection.QueryAsync<DiscountModel>("select * from Discount where id=@id", new { id = id });

                return GenericResponse<DiscountModel>.Success(discount.FirstOrDefault(), 200);

            }
            catch (Exception ex)
            {
                return GenericResponse<DiscountModel>.Fail(ex.Message, 400);
            }
        }

        public async Task<GenericResponse<GenericNoContent>> Save(DiscountModel model)
        {
            try
            {

                var saveStatus = await dbConnection.QueryAsync<DiscountModel>("Insert Into Discount (id,userid,rate,code) values (@id,@userid,@rate,@code)   "
                    , model);

                if (saveStatus.Any())
                {
                    throw new Exception("There is an error while saving the discount!") { };
                }
                else
                {
                    return GenericResponse<GenericNoContent>.Success(200);
                }



            }
            catch (Exception ex)
            {
                return GenericResponse<GenericNoContent>.Fail(ex.Message, 400);
            }
        }


        public async Task<GenericResponse<GenericNoContent>> Delete(int id)
        {
            try
            {

                var deleteStatus = await dbConnection.QueryAsync<DiscountModel>("delete from  Discount where id=@id ", new { id = id });

                if (deleteStatus.Any())
                {
                    throw new Exception("There is an error while deleting the discount!") { };
                }
                else
                {
                    return GenericResponse<GenericNoContent>.Success(200);
                }



            }
            catch (Exception ex)
            {
                return GenericResponse<GenericNoContent>.Fail(ex.Message, 400);
            }
        }



        public async Task<GenericResponse<GenericNoContent>> Update(DiscountModel model)
        {
            try
            {

                var updateStatus = await dbConnection.QueryAsync<DiscountModel>("Update Discount set userid=@userid,rate=@rate , code=@code  where id=@id ", model);

                if (updateStatus.Any())
                {
                    throw new Exception("There is an error while updating the discount!") { };
                }
                else
                {
                    return GenericResponse<GenericNoContent>.Success(200);
                }
            }
            catch (Exception ex)
            {
                return GenericResponse<GenericNoContent>.Fail(ex.Message, 400);
            }
        }


        public async Task<GenericResponse<DiscountModel>> GetByCodeAndUserId(string code, string userId)
        {
            try
            {
                var discount = await dbConnection.QueryAsync<DiscountModel>("select * from Discount where code=@code and @userId=userId", new { code = code, userId = userId });

                return GenericResponse<DiscountModel>.Success(discount.FirstOrDefault(), 200);
            }
            catch (Exception ex)
            {
                return GenericResponse<DiscountModel>.Fail(ex.Message, 400);
            }
        }





    }
}
