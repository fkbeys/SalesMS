namespace YashilDehliz.Api.MiddleWares
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;
    using SalesMS.Shared.SharedClass.Dtos;

    public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
    {
        //TODO: Logging hast to be added...
        public override void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            // Log the exception:
            string errorMessage = exception?.Message ?? "" + " " + exception?.InnerException?.Message ?? "";
            var response = GenericResponse<NoContentResult>.Fail(errorMessage, 400);
            context.Result = new NotFoundObjectResult(response);
            context.ExceptionHandled = true;

            base.OnException(context);
        }
    }


}
