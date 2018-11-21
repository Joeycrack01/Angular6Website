using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Helpers;

namespace WebApiNew.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        DataContext Init();
    }
}
