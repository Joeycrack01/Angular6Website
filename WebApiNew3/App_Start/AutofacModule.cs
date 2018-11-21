using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Services;

namespace WebApiNew.App_Start
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<UserService>()
           .As<IUserService>()
           .InstancePerRequest();

            builder.RegisterType<WeatherForecastServices>()
           .As<IWeatherForecastServices>()
           .InstancePerRequest();
        }
    }
}
