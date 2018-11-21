using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;

namespace WebApiNew.Services
{
    public class WeatherForecastServices : IWeatherForecastServices
    {
        private DataContext _context;

        public WeatherForecastServices(DataContext context)
        {
            _context = context;
        }

        public IEnumerable<WeatherForecast> GetAll()
        {
            return _context.WeatherForecasts;
        }
    }

    public interface IWeatherForecastServices
    {
        IEnumerable<WeatherForecast> GetAll();
    }
}
