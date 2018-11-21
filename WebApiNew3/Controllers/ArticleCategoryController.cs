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

        [HttpGet("GetCategories")]
        public async Task<IEnumerable<ArticleCategory>> GetCategories()
        {
            var articles = await _articleCategoryRepository.GetAll();
            return articles;
        }

        [HttpGet("GetById/{Id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var articles = await _articleCategoryRepository.GetCategory(Id);
            return Ok(articles);
        }

        [HttpPost("CategoryPost")]
        public async Task<IActionResult> CategoryPost([FromBody]CategoryViewModel categoryVm)
        {
            var contct = new ArticleCategory();
            contct.CategoryName = categoryVm.CategoryName;

            var dr = await _articleCategoryRepository.GetAll();

            if (dr != null) {

                if (dr.Any(a => a.CategoryName.Equals(contct.CategoryName, StringComparison.InvariantCultureIgnoreCase)))
                {
                    throw new Exception("A Category With Name" + " " + '"' + contct.CategoryName + '"' + " " + "already exist");
                }
                try
                {
                    await _articleCategoryRepository.AddCategory(contct);
                    return Ok();
                }
                catch (AppException ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }

            return Ok();
        }

        [HttpPut("PutCategory")]
        public async Task<IActionResult> PutCategory([FromBody]CategoryViewModel categoryVm)
        {

            if (!ModelState.IsValid)
            {
                throw new Exception(string.Join("\n", ModelState.Keys.SelectMany(k => ModelState[k].Errors).Select(m => m.ErrorMessage).ToArray()));
            }
            else
            {
                var artic = new ArticleCategory();

                var _article = await _articleCategoryRepository.GetCategory(categoryVm.Id);
                if (_article == null)
                {
                    throw new Exception("Invalid article.");
                }
                else
                {
                    try
                    {
                        artic.CategoryName = categoryVm.CategoryName;
                        artic.ID = categoryVm.Id;
                        //_article.UpdateToArticle(articleVm);

                        await _articleCategoryRepository.UpdateCategory(artic);


                        return Ok();
                    }

                    catch (AppException ex)
                    {
                        return BadRequest(new { message = ex.Message });
                    }
                }




            }

        }
    }
}
