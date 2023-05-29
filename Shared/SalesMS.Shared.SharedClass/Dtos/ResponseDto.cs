using System.Text.Json.Serialization;

namespace SalesMS.Shared.SharedClass.Dtos
{
    public class ResponseDto<T> where T : class
    {
        //static factory method
        public T? data { get; private set; }

        public bool isSuccess { get; private set; }

        [JsonIgnore]
        public int statusCode { get; private set; }
        public List<string>? errors { get; private set; }

        public static ResponseDto<T> Success(T data, int statuscode)
        {
            return new ResponseDto<T> { data = data, statusCode = statuscode, isSuccess = true, errors = null };
        }


        public static ResponseDto<T> Success(int statuscode)
        {
            return new ResponseDto<T> { data = default(T), statusCode = statuscode, isSuccess = true, errors = null };
        }

        public static ResponseDto<T> Fail(List<string> _errors, int statuscode)
        {
            return new ResponseDto<T> { data = default(T), statusCode = statuscode, isSuccess = false, errors = _errors };
        }

        public static ResponseDto<T> Fail(string error, int statuscode)
        {
            return new ResponseDto<T> { data = default(T), statusCode = statuscode, isSuccess = false, errors = new() { error } };
        }



    }
}
