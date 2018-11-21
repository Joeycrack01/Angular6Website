using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Entities
{
    public class ArticleCategory 
    {
        public ArticleCategory()
        {
            Articles = new HashSet<Article>();
        }

        public int ID { get; set; }

        [Required]
        public string CategoryName { get; set; }

        public virtual ICollection<Article> Articles { get; set; }
    }
}
