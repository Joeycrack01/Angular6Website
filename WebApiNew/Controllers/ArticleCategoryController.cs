using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Services;

namespace WebApiNew.Controllers
{
    [Route("api/[controller]")]
    public class ArticleCategoryController : BaseApiController
    {
        //private IArticleRepository _articleRepository;
        private IArticleCategoryRepository _articleCategoryRepository;
        //private ISectioReposiitory _sectioRepository;

        public ArticleCategoryController (IArticleCategoryRepository articleCategoryRepository, IErrorRepository errorRepository)
            : base(errorRepository)
        {
            //_articleRepository = articleRepository;
            _articleCategoryRepository = articleCategoryRepository;
            //_sectioRepository = sectioReposiitory;

        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<ArticleCategory>> GetByCatSect()
        {
            var articles = await _articleCategoryRepository.GetAll();
            return articles;
        }
    }
}
