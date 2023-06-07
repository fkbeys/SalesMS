using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SalesMS.Shared.SharedClass.Dtos;

namespace SalesMS.Shared.SharedClass.MiddlewareAndFilters
{
    public class ValidationErrorCatcher : ActionFilterAttribute
    {
        /// <summary>
        /// if any modelstate validation error occures, we will catch it here
        /// </summary>
        /// <param name="context"></param>
        //TODO: Logging hast to be added...
        public override void OnResultExecuting(ResultExecutingContext context)
        {

            if (!context.ModelState.IsValid)
            {
                string errors = "";
                try
                {
                    foreach (var item in context.ModelState.Values)
                    {
                        errors += item.Errors[0].ErrorMessage.ToString() + " / ";
                    }
                }
                catch (Exception ex)
                {
                    string hata = ex.Message;
                }
                finally
                {
                    context.Result = new NotFoundObjectResult((GenericResponse<NoContentResult>.Fail(errors, 400)));
                }
            }
            else
            {
                base.OnResultExecuting(context);
            }

        }

    }
}
