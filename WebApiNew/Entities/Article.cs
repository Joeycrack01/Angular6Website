using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Entities
{
    public class Article 
    {

        public Article()
        {
            Comment = new HashSet<Comment>();
        }

        public int ID { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string ArticleContent { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }
        public DateTime DateLastUpdated { get; set; }

        [Required]
        public string Author { get; set; }
        
        public int SectionID { get; set; }
        public virtual Section Sections { get; set; }

        [Required]
        public string CaptionImageUrl { get; set; }

        public virtual ICollection<Comment> Comment { get; set; }

        [Required]
        public int ArticleCategoryID { get; set; }
        public virtual ArticleCategory ArticleCategory { get; set; }

    }
}
