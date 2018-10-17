using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Helpers
{
    public class ResponseBase<T> : ResponseBase
    {
        public T Payload
        {
            get;
            set;
        }
    }

    public class ResponseBase
    {
        /// <summary>
        /// Use on the frontend to distinguish api response and other responses
        /// </summary>
        public bool IsAPI
        {
            get
            {
                return true;
            }
        }

        public string ErrorDetails
        {
            get;
            set;
        }
    }
}
