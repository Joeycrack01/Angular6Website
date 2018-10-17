using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;

namespace WebApiNew.Configurations
{
    public class ArticleConfiguration : IEntityTypeConfiguration<Article>
    {
        public ArticleConfiguration()
        {
            ToTable("Article");
            Property(a => a.Title).IsRequired().HasMaxLength(150);
            Property(a => a.ApplicationUserId).IsRequired().HasMaxLength(128);
            Property(a => a.ArticleContent).IsRequired();
            Property(a => a.DateCreated).IsRequired();
            Property(a => a.sectionID).IsRequired();
            Property(a => a.ArticleAccessID).IsRequired();
            Property(a => a.CaptionImageUrl).IsOptional().HasMaxLength(150);
            Property(a => a.DateLastUpdated).IsRequired();
        }
    }
}
