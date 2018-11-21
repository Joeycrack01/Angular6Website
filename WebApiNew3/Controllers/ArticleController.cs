using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Extensions;
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
        public async Task<IEnumerable<ArticleViewModel>> GetByCatSect(int CatId, int SectId)
        {
            var articles = await _articleRepository.GetArticlesByCatSect(CatId, SectId);
            return articles;
        }

        [HttpGet("GetAll")]
        public async Task<IEnumerable<ArticleListViewModel>> GetAll()
        {
            var articles = await _articleRepository.GetALLArticles();
            return articles;



        }

        [HttpGet("{Id}")]
        public async Task<IEnumerable<ArticleViewModel>> GetByCategory(int Id)
        {
            var articles = await _articleRepository.GetArticlesByCategory(Id);
            return articles;
        }

        public async Task<IEnumerable<ArticleViewModel>> GetBySection(int SectionId)
        {
            var articles = await _articleRepository.GetArticleBySection(SectionId);
            return articles;
        }


        //[HttpGet("GetArticleCat/{Id}")]
        //public async Task<ArticleViewModel> GetArticleCat(int Id)
        //{

        //    var articles = await _articleRepository.GetArticle(Id);
        //    var articlesVm = new ArticleViewModel();
        //    articlesVm.CategoryName = articles.ArticleCategory.CategoryName;
        //    return articlesVm;
        //}

        //[HttpGet("{id}", Name = "GetByArticle")]
        [HttpGet("GetByArticle/{Id}")]
        public async Task<ArticleViewModel> GetByArticle(int Id)
        {
            // var CatName = await _articleRepository.GetArticleCat(Id);
            var articles = await _articleRepository.GetArticle(Id);
            return articles;


        }


        [HttpPost("ArticlePost")]
        public async Task<IActionResult> ArticlePost([FromBody]ArticleViewModel articleVm)
        {
            var contct = new Article();
            contct.AddToArticle(articleVm);

            var dr = await _articleRepository.GetArticlesByCatSect(articleVm.articleCategoryID, articleVm.SectionID);
            if (dr != null)
            {
                if (dr.Count() > 7)
                {
                    throw new Exception("There is too many articles in this section already Delete some");
                }
                try
                {
                    await _articleRepository.AddArticle(contct);
                    return Ok();
                }
                catch (AppException ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            return Ok();
        }

        [HttpPut("PutArticle")]
        public async Task<IActionResult> PutArticle([FromBody]ArticleViewModel articleVm)
        {
            var dr = await _articleRepository.GetArticlesByCatSect(articleVm.articleCategoryID, articleVm.SectionID);

            if (!ModelState.IsValid)
            {
                throw new Exception(string.Join("\n", ModelState.Keys.SelectMany(k => ModelState[k].Errors).Select(m => m.ErrorMessage).ToArray()));
            }
            else if (dr != null)
            {
                if (dr.Count() > 7)
                {
                    throw new Exception("There is too many articles in this section already Delete some");
                }
                {
                    var artic = new Article();

                    var _article = await _articleRepository.GetArticle(articleVm.ID);
                    if (_article == null)
                    {
                        throw new Exception("Invalid article.");
                    }
                    else
                    {
                        try
                        {
                            artic.UpdateToArticle(articleVm);
                            //_article.UpdateToArticle(articleVm);

                            await _articleRepository.UpdateArticle(artic);


                            return Ok();
                        }

                        catch (AppException ex)
                        {
                            return BadRequest(new { message = ex.Message });
                        }
                    }




                }

            }
            return Ok();
        }
    }
}
