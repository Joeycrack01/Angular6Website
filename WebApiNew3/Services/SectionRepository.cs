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

        public async Task<Section> GetSection(int Id)
        {
            var ArticCat = await _context.Sections.FindAsync(Id);
            return ArticCat;
        }

        public async Task AddSection(Section sectionView)
        {
            _context.Sections.Add(sectionView);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSection(Section sectionView)
        {

            _context.Entry(sectionView).Property(p => p.SectionName).IsModified = true;
            _context.Sections.Update(sectionView);
            await _context.SaveChangesAsync();
        }
    }

    public interface ISectioRepository
    {
        Task<IEnumerable<Section>> GetAll();
        Task<Section> GetSection(int Id);
        Task UpdateSection(Section sectionView);
        Task AddSection(Section sectionView);
    }
}
