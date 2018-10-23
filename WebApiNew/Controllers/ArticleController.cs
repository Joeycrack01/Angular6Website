using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Helpers;
using WebApiNew.Services;
using WebApiNew.ViewModels;

namespace WebApiNew.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : BaseApiController
    {
        private IArticleRepository _articleRepository;
        private IArticleCategoryRepository _articleCategoryRepository;
        private ISectioRepository _sectioRepository;

        public ArticleController(IArticleRepository articleRepository, IArticleCategoryRepository articleCategoryRepository, ISectioRepository sectioReposiitory, IErrorRepository errorRepository)
            : base(errorRepository)
        {
            _articleRepository = articleRepository;
            _articleCategoryRepository = articleCategoryRepository;
            _sectioRepository = sectioReposiitory;

        }

        [HttpGet("{CatId}/{SectId}")]
        public async Task<IEnumerable<ArticleListViewModel>> GetByCatSect(int CatId, int SectId)
        {
            var articles = await _articleRepository.GetArticlesByCatSect(CatId, SectId);
            return articles;
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<Article>> GetAll()
        {
            var articles = await _articleRepository.GetALLArticles();
            return articles;
        }

        [HttpGet("{Id}")]
        public async Task<IEnumerable<ArticleListViewModel>> GetByCategory(int Id)
        {
            var articles = await _articleRepository.GetArticlesByCategory(Id);
            return articles;
        }

        public async Task<IEnumerable<ArticleListViewModel>> GetBySection(int SectionId)
        {
            var articles = await _articleRepository.GetArticleBySection(SectionId);
            return articles;
        }


        //[HttpGet("{id}", Name = "GetByArticle")]
        [HttpGet("GetByArticle/{Id}")]
        public  IActionResult GetByArticle(int Id)
        {
            var articles =  _articleRepository.GetArticle(Id);
            return Ok(articles);
        }

    }
}
