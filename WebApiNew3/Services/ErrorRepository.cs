using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;

namespace WebApiNew.Services
{
    public class ErrorRepository : RepositoryBase<Error>, IErrorRepository
    {
        public ErrorRepository( )
            : base()
        { }
    }

    public interface IErrorRepository : IRepository<Error>
    {

    }
}
