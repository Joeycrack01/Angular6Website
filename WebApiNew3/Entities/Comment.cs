using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Entities
{
    public class Comment 
    {
        public Comment()
        {

        }

        public int ID { get; set; }
        [Required]
        public string Comments { get; set; }
        public DateTime DateCreated { get; set; }
        public int CommentOn { get; set; }
        public string Email { get; set; }
        [Required]
        public int ArticleID { get; set; }
        public virtual Article Article { get; set; }
        [Required]
        public string CommentBy { get; set; }
    }
}
