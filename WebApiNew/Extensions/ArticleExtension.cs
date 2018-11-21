using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.ViewModels;

namespace WebApiNew.Extensions
{
   public static class ArticleExtension { 
      public static void AddToArticle(this Article article, ArticleViewModel articleVm)
      {
            article.ID = articleVm.ID;
            article.ArticleCategoryID = articleVm.articleCategoryID;
            article.Author = articleVm.Author;
            article.ArticleContent = articleVm.ArticleContent;
            article.CaptionImageUrl = articleVm.CaptionImageUrl;
            article.DateCreated = DateTime.UtcNow;
            article.SectionID = articleVm.SectionID;
            article.Title = articleVm.Title;


      }

        public static void UpdateToArticle(this Article article, ArticleViewModel articleVm)
        {
            article.ID = articleVm.ID;
            article.ArticleCategoryID = articleVm.articleCategoryID;
            article.Author = articleVm.Author;
            article.ArticleContent = articleVm.ArticleContent;
            article.CaptionImageUrl = articleVm.CaptionImageUrl;
            article.DateCreated = DateTime.UtcNow;
            article.SectionID = articleVm.SectionID;
            article.Title = articleVm.Title;
            article.DateLastUpdated = articleVm.DateLastUpdated;


        }
    }
}
