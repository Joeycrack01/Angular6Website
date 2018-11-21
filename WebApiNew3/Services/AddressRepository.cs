using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;
using WebApiNew.ViewModels;

namespace WebApiNew.Services
{
    public class AddressRepository : IAddressRepository
    {
        private DataContext _context;

        public AddressRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Address> GetAddress(int Id)
        {
            var ArticCat = await _context.Addresses.FindAsync(Id);
            return ArticCat;
        }
    }

    public interface IAddressRepository
    {
        Task<Address> GetAddress(int Id);
    }
}



