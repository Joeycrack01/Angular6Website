using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Services;

namespace WebApiNew.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : BaseApiController
    {
        private IAddressRepository _addressRepository;

        public AddressController(IAddressRepository addressRepository, IErrorRepository errorRepository)
            : base(errorRepository)
        {
            _addressRepository = addressRepository;
        }

        [HttpGet("GetAdress/{Id}")]
        public async Task<IActionResult> GetAdress(int Id)
        {
            var address = await _addressRepository.GetAddress(Id);
            return Ok(address);
        }

    }
}
