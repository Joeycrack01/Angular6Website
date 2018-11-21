using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;
using WebApiNew.ViewModels;

namespace WebApiNew.Services
{
    public class ContactUsRepository : IContactUsRepository
    {
        private DataContext _context;

        public ContactUsRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ContactUsListViewModel>> GetContactUsList()
        {
            var contactUs = await _context.ContactUs.
                Select(y => new ContactUsListViewModel
                {
                    ID = y.ID,
                    Name = y.Name,
                    Email = y.Email,
                    DateContacted = y.DateContacted

                }).ToListAsync();
            return contactUs;
        }

        public async Task<ContactUsViewModel> GetContactUs(int Id)
        {
            var contactUs = await _context.ContactUs.Where(e => e.ID == Id)
                .Select(y => new ContactUsViewModel
                {
                    ID = y.ID,
                    Name = y.Name,
                    Email = y.Email,
                    Message = y.Message,
                    DateContacted = y.DateContacted
                }).SingleOrDefaultAsync();
            return contactUs;
        }

        public async Task AddContactUs(ContactUs contactUsView)
        {

            _context.ContactUs.Add(contactUsView);
            await _context.SaveChangesAsync();
        }
    }

    public interface IContactUsRepository
    {
        Task<ContactUsViewModel> GetContactUs(int Id);
        Task<IEnumerable<ContactUsListViewModel>> GetContactUsList();
        Task AddContactUs(ContactUs contactUsView);
    }
}
