using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Entities
{
    public class Section
    {
        public Section()
        {
            Articles = new HashSet<Article>();
        }

        public int Id { get; set; }
        public string SectionName { get; set; }
        public ICollection<Article> Articles { get; set; }
    }
}
