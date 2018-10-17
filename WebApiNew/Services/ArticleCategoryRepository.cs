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
        }

        public interface IArticleCategoryRepository
        {
            Task<IEnumerable<ArticleCategory>> GetAll();
        }
 }
