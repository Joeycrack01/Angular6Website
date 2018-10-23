using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Entities
{
    public class Address
    {
        public int Id { get; set; }
        public string OfficeLocation { get; set; }
        public string OfficeContacNo { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
    }
}
