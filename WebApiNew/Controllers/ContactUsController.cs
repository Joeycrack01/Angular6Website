using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Services;
using WebApiNew.ViewModels;
using WebApiNew.Entities;
using WebApiNew.Extensions;
using WebApiNew.Helpers;

namespace WebApiNew.Controllers
{
    [Route("api/[controller]")]
    public class ContactUsController : BaseApiController
    {
        private IContactUsRepository _contactUsRepository;

        public ContactUsController(IContactUsRepository contactUsRepository, IErrorRepository errorRepository)
            : base(errorRepository)
        {
            _contactUsRepository = contactUsRepository;
        }
        [HttpGet("{Id}")]
        public async Task<ContactUsViewModel> GetContactUs(int Id)
        {
            var contactUs = await _contactUsRepository.GetContactUs(Id);
            return contactUs;
        }

        [HttpGet]
        public async Task<IEnumerable<ContactUsListViewModel>> GetContactUsList()
        {
            var contactUs = await _contactUsRepository.GetContactUsList();
            return contactUs;
        }

        [HttpPost("ContactUsPost")]
        public async Task<IActionResult> ContactUsPost([FromBody]ContactUsViewModel contactUsVm)
        {
            var contct = new ContactUs();
            contct.UpdateContactUs(contactUsVm);
            try
            {
                await _contactUsRepository.AddContactUs(contct);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

    }
}
