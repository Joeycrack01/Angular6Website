using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.ViewModels
{
    public class ArticleViewModel
    {

        public int ID { get; set; }

        public string Title { get; set; }

        public string ArticleContent { get; set; }

        public DateTime DateCreated { get; set; }
        public DateTime DateLastUpdated { get; set; }

        public int SectionID { get; set; }

        public string CaptionImageUrl { get; set; }

        public string Author { get; set; }

    }

    public class ArticleListViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime DateCreated { get; set; }
        public string Author { get; set; }
        public string ArticleContent { get; set; }
        public string CaptionImageUrl { get; set; }

    }
}
