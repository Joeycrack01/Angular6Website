using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiNew.Helpers
{
        public interface IPagedList<T> //: IQueryable<T>, IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable
        {
            List<T> Items { get; set; }

            int PageCount
            {
                get;
            }

            int TotalItemCount
            {
                get;
            }

            int PageNumber
            {
                get;
            }

            int PageSize
            {
                get;
            }

            bool HasPreviousPage
            {
                get;
            }

            bool HasNextPage
            {
                get;
            }

            bool IsFirstPage
            {
                get;
            }

            bool IsLastPage
            {
                get;
            }

            int ItemStart
            {
                get;
            }

            int ItemEnd
            {
                get;
            }
        }
}

