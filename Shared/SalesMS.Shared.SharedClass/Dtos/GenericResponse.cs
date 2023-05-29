using System.Text.Json.Serialization;

namespace SalesMS.Shared.SharedClass.Dtos
{
    public class GenericResponse<T> 
    {
        //static factory method
        public T? data { get; private set; }

        public bool isSuccess { get; private set; }

        [JsonIgnore]
        public int statusCode { get; private set; }
        public List<string>? errors { get; private set; }

        public static GenericResponse<T> Success(T data, int statuscode)
        {
            return new GenericResponse<T> { data = data, statusCode = statuscode, isSuccess = true, errors = null };
        }


        public static GenericResponse<T> Success(int statuscode)
        {
            return new GenericResponse<T> { data = default(T), statusCode = statuscode, isSuccess = true, errors = null };
        }

        public static GenericResponse<T> Fail(List<string> _errors, int statuscode)
        {
            return new GenericResponse<T> { data = default(T), statusCode = statuscode, isSuccess = false, errors = _errors };
        }

        public static GenericResponse<T> Fail(string error, int statuscode)
        {
            return new GenericResponse<T> { data = default(T), statusCode = statuscode, isSuccess = false, errors = new() { error } };
        }



    }
}
