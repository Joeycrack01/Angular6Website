using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Dtos;
using WebApiNew.Entities;

namespace WebApiNew.Extensions
{
    public static class UserExtension
    {
        public static void UpdateUser(this User user, UserDto userVm)
        {
            user.FirstName = userVm.FirstName;
            user.LastName = userVm.LastName;
            user.UserName = userVm.UserName;
            user.Id = userVm.Id;

        }
    }
}
