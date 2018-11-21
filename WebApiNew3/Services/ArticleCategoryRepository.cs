using global::WebApiNew.Entities;
using global::WebApiNew.Helpers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Services
{
   
        public class ArticleCategoryRepository : IArticleCategoryRepository
        {
            private DataContext _context;

            public ArticleCategoryRepository(DataContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<ArticleCategory>> GetAll()
            {
                var ArticCat = await  _context.ArticleCategories.ToListAsync();
                return ArticCat;
            }

            public async Task<ArticleCategory> GetCategory(int Id)
            {
            var ArticCat = await _context.ArticleCategories.FindAsync(Id);
            return ArticCat;
            }

            public async Task AddCategory(ArticleCategory categoryView)
            {
                _context.ArticleCategories.Add(categoryView);
                await _context.SaveChangesAsync();
            }

            public async Task UpdateCategory(ArticleCategory categoryView)
            {
             
                _context.Entry(categoryView).Property(p => p.CategoryName).IsModified = true;
                _context.ArticleCategories.Update(categoryView);
                await _context.SaveChangesAsync();
            }
    }

        public interface IArticleCategoryRepository
        {
            Task<IEnumerable<ArticleCategory>> GetAll();
            Task<ArticleCategory> GetCategory(int Id);
            Task AddCategory(ArticleCategory categoryView);
            Task UpdateCategory(ArticleCategory categoryView);
        }
 }
