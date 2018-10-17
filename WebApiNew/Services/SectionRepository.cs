using global::WebApiNew.Entities;
using global::WebApiNew.Helpers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Services
{

    public class SectioRepository : ISectioRepository
    {
        private DataContext _context;

        public SectioRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Section>> GetAll()
        {
            var ArticCat = await _context.Sections.ToListAsync();
            return ArticCat;
        }
    }

    public interface ISectioRepository
    {
        Task<IEnumerable<Section>> GetAll();
    }
}
