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

        public async Task<IEnumerable<ArticleListViewModel>> GetALLArticles()
        {
            var ArticCat = await _context.Articles
                .Select(y => new ArticleListViewModel
                {
                    Id = y.ID,
                    Title = y.Title,
                    DateCreated = y.DateCreated,
                    Author = y.Author,
                    CategoryName = y.ArticleCategory.CategoryName,
                    SectionName = y.Sections.SectionName

                }).ToListAsync();
            return ArticCat;
        }

        public async Task<IEnumerable<ArticleViewModel>> GetALL()
        {
            var ArticCat = await _context.Articles
                .Select(y => new ArticleViewModel
                {
                    ID = y.ID,
                    Title = y.Title,
                    DateCreated = y.DateCreated,
                    Author = y.Author,
                    CategoryName = y.ArticleCategory.CategoryName,
                    SectionName = y.Sections.SectionName,
                    articleCategoryID = y.ArticleCategoryID,
                    SectionID = y.SectionID
                    

                }).ToListAsync();
            return ArticCat;
        }

        public async Task<IEnumerable<ArticleViewModel>> GetArticlesByCategory(int CatID)
        {
            var ArticCat = await _context.Articles.Where(e => e.ArticleCategoryID == CatID)
                .Select(y => new ArticleViewModel
                {
                    ID = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    Title = y.Title,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl
                }).ToListAsync();

            return ArticCat;
        }

        public async Task<ArticleViewModel> GetArticle(int Id)
        {
            var articles = await _context.Articles.FindAsync(Id);
            var articlesVm = new ArticleViewModel();
            articlesVm.ArticleContent = articles.ArticleContent;
            articlesVm.Author = articles.Author;
            articlesVm.CaptionImageUrl = articles.CaptionImageUrl;
            articlesVm.articleCategoryID = articles.ArticleCategoryID;
            articlesVm.CategoryName = await _context.ArticleCategories.Where(e => e.ID == Id).Select(y => y.CategoryName).FirstOrDefaultAsync();
            articlesVm.DateCreated = articles.DateCreated;
            articlesVm.DateLastUpdated = articles.DateLastUpdated;
            articlesVm.ID = articles.ID;
            articlesVm.SectionID = articles.SectionID;
            articlesVm.SectionName = await _context.Sections.Where(e => e.Id == Id).Select(y => y.SectionName).FirstOrDefaultAsync();
            articlesVm.Title = articles.Title;

            return articlesVm;

        }

        //public async Task<ArticleCategory> GetArticleCat(int Id)
        //{
        //    var ArticCat = await _context.ArticleCategories.Where(e => e.ID == Id).Select(y => y.CategoryName).FirstOrDefaultAsync();
        //    return ArticCat;
        //}

        public async Task<IEnumerable<ArticleViewModel>> GetArticleBySection(int sectionId)
        {
            var _article = await _context.Articles.Where(r => r.SectionID == sectionId)
                .Select(y => new ArticleViewModel
                {
                    ID = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl
                }).ToListAsync();

            return _article;
        }

        public async Task<IEnumerable<ArticleViewModel>> GetArticlesByCatSect (int CatID, int sectionId)
        {
            var ArticCat = await _context.Articles.Where(e => e.ArticleCategoryID == CatID && e.SectionID == sectionId)
                .Select(y => new ArticleViewModel
                {
                    ID = y.ID,
                    ArticleContent = y.ArticleContent,
                    Author = y.Author,
                    DateCreated = y.DateCreated,
                    CaptionImageUrl = y.CaptionImageUrl

                }).ToListAsync();

            return ArticCat;
        }

        public async Task AddArticle(Article articleView)
        {

            _context.Articles.Add(articleView);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateArticle(Article articleView)
        {
            _context.Entry(articleView).Property(p => p.SectionID).IsModified = true;
            _context.Entry(articleView).Property(p => p.ArticleCategoryID).IsModified = true;
            _context.Entry(articleView).Property(p => p.ArticleContent).IsModified = true;
            _context.Entry(articleView).Property(p => p.Author).IsModified = true;
            _context.Entry(articleView).Property(p => p.CaptionImageUrl).IsModified = true;
            _context.Entry(articleView).Property(p => p.Title).IsModified = true;
            _context.Articles.Update(articleView);
            await _context.SaveChangesAsync();
        }
    }

    public interface IArticleRepository
    {
        Task<IEnumerable<ArticleViewModel>> GetArticlesByCategory(int CatID);
        Task<IEnumerable<ArticleViewModel>> GetArticlesByCatSect(int CatID, int sectionId);
        Task<IEnumerable<ArticleViewModel>> GetArticleBySection(int sectionId);
        Task<ArticleViewModel> GetArticle(int Id);
        //Task<ArticleViewModel> GetArticleCat(int Id);
        Task<IEnumerable<ArticleListViewModel>> GetALLArticles();
        Task AddArticle(Article articleView);
        Task UpdateArticle(Article articleView);
        Task<IEnumerable<ArticleViewModel>> GetALL();
    };
}
