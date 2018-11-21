using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;
using WebApiNew.Services;

namespace WebApiNew.Controllers
{
    public class BaseApiController : Controller
    {
        protected readonly IErrorRepository _errorsRepository;
        

        public BaseApiController(IErrorRepository errorsRepository)
        {
            _errorsRepository = errorsRepository;
           
        }

        protected virtual ResponseBase ExecuteRequest(Action executeMethod)
        {
            ResponseBase responseBase = new ResponseBase();
            try
            {
                executeMethod();
            }
            catch (Exception ex)
            {
                LogError(ex);
                responseBase.ErrorDetails = ex.Message;
            }
            return responseBase;
        }

        protected virtual ResponseBase<T> ExecuteRequest<T>(Func<T> executeMethod)
        {
            ResponseBase<T> responseBase = new ResponseBase<T>();
            try
            {
                responseBase.Payload = executeMethod();
            }
            catch (Exception ex)
            {
                LogError(ex);
                responseBase.ErrorDetails = ex.Message;
            }
            return responseBase;
        }

        protected virtual async Task<ResponseBase<T>> ExecuteRequestAsync<T>(Func<Task<T>> executeMethod)
        {
            ResponseBase<T> responseBase = new ResponseBase<T>();

            try
            {
                responseBase.Payload = await executeMethod();
            }
            catch (Exception ex)
            {
                LogError(ex);
                responseBase.ErrorDetails = ex.Message;
            }
            return responseBase;

        }


        private void LogError(Exception ex)
        {
            try
            {
                Error _error = new Error()
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    DateCreated = DateTime.Now
                };
                _errorsRepository.Add(_error);
               
            }
            catch { }
        }
    }
}
