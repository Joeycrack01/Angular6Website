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
    public class SectionController : BaseApiController
    {
        //private IArticleRepository _articleRepository;
        //private IArticleCategoryRepository _articleCategoryRepository;
        private ISectioRepository _sectioRepository;

        public SectionController(ISectioRepository sectioRepository, IErrorRepository errorRepository)
            : base(errorRepository)
        {
            //_articleRepository = articleRepository;
            //_articleCategoryRepository = articleCategoryRepository;
            _sectioRepository = sectioRepository;

        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<Section>> GetByCatSect()
        {
            var articles = await _sectioRepository.GetAll();
            return articles;
        }
    }
}
