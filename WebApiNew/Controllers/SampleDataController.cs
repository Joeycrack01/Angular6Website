using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiNew.Dtos;
using WebApiNew.Entities;
using WebApiNew.Services;

namespace WebApiNew.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private IWeatherForecastServices _weatherService;

        public SampleDataController(IWeatherForecastServices weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var weathers = _weatherService.GetAll();
            return weathers;    
        }
        
    }
}
