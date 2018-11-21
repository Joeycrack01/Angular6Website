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

        [HttpGet("GetSections")]
        public async Task<IEnumerable<Section>> GetSections()
        {
            var articles = await _sectioRepository.GetAll();
            return articles;
        }

        [HttpGet("GetById/{Id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var articles = await _sectioRepository.GetSection(Id);
            return Ok(articles);
        }

        [HttpPost("SectionPost")]
        public async Task<IActionResult> SectionPost([FromBody]SectionViewModel sectionVm)
        {
            var contct = new Section();
            contct.SectionName = sectionVm.SectionName;

            var dr = await _sectioRepository.GetAll();

            if (dr != null)
            {

                if (dr.Any(a => a.SectionName.Equals(contct.SectionName, StringComparison.InvariantCultureIgnoreCase)))
                {
                    throw new Exception("A Section With Name" + " " + '"' + contct.SectionName + '"' + " " + "already exist");
                }
                try
                {
                    await _sectioRepository.AddSection(contct);
                    return Ok();
                }
                catch (AppException ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }

            return Ok();
        }

        [HttpPut("PutSection")]
        public async Task<IActionResult> PutSection([FromBody]SectionViewModel sectionVm)
        {

            if (!ModelState.IsValid)
            {
                throw new Exception(string.Join("\n", ModelState.Keys.SelectMany(k => ModelState[k].Errors).Select(m => m.ErrorMessage).ToArray()));
            }
            else
            {
                var artic = new Section();

                var _article = await _sectioRepository.GetSection(sectionVm.Id);
                if (_article == null)
                {
                    throw new Exception("Invalid article.");
                }
                else
                {
                    try
                    {
                        artic.SectionName = sectionVm.SectionName;
                        artic.Id = sectionVm.Id;

                        await _sectioRepository.UpdateSection(artic);


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

   
