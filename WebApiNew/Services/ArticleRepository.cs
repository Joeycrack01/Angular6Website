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
    public class ArticleRepository : IArticleRepository
    {
        private DataContext _context;

        public ArticleRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Article>> GetALLArticles()
        {
            var ArticCat = await _context.Articles.ToListAsync();
            return ArticCat;
        }

        public async Task<IEnumerable<ArticleListViewModel>> GetArticlesByCategory(int CatID)
        {
            var ArticCat = await _context.Articles.Where(e => e.ArticleCategoryID == CatID)
                .Select(y => new ArticleListViewModel
                {
                    Id = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    Title = y.Title,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl
                }).ToListAsync();

            return ArticCat;
        }

        public Article GetArticle(int Id)
        {
            var ArticCat = _context.Articles.Find(Id);
            return ArticCat;
        }

        public async Task<IEnumerable<ArticleListViewModel>> GetArticleBySection(int sectionId)
        {
            var _article = await _context.Articles.Where(r => r.SectionID == sectionId)
                .Select(y => new ArticleListViewModel
                {
                    Id = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl
                }).ToListAsync();

            return _article;
        }

        public async Task<IEnumerable<ArticleListViewModel>> GetArticlesByCatSect (int CatID, int sectionId)
        {
            var ArticCat = await _context.Articles.Where(e => e.ArticleCategoryID == CatID && e.SectionID == sectionId)
                .Select(y => new ArticleListViewModel
                {
                    Id = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl

                }).ToListAsync();

            return ArticCat;
        }
    }

    public interface IArticleRepository
    {
        Task<IEnumerable<ArticleListViewModel>> GetArticlesByCategory(int CatID);
        Task<IEnumerable<ArticleListViewModel>> GetArticlesByCatSect(int CatID, int sectionId);
        Task<IEnumerable<ArticleListViewModel>> GetArticleBySection(int sectionId);
        Article GetArticle(int Id);
        Task<IEnumerable<Article>> GetALLArticles();
    };
}
