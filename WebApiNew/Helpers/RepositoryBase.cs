using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WebApiNew.Helpers
{
    public abstract class RepositoryBase<T> where T : class
    {
        #region Properties
        private DataContext dataContext;
        private readonly DbSet<T> dbSet;

        //protected IDbFactory DbFactory
        //{
        //    get;
        //    private set;
        //}

        //protected CuzaEnterpriseContext DbContext
        //{
        //    get
        //    {
        //        return dataContext ?? (dataContext = DbFactory.Init());
        //    }
        //}
        #endregion

        //protected RepositoryBase(IDbFactory dbFactory)
        //{
        ////    DbFactory = dbFactory;
        //    dbSet = DbContext.Set<T>();
        //}

        #region Implementation
        public virtual void Add(T entity)
        {
            dbSet.Add(entity);
        }

        public virtual void Update(T entity)
        {
            dbSet.Attach(entity);
            dataContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Delete(T entity)
        {
            dbSet.Remove(entity);
        }

        public virtual void Delete(Expression<Func<T, bool>> where)
        {
            IEnumerable<T> objects = dbSet.Where<T>(where).AsEnumerable();
            foreach (T obj in objects)
                dbSet.Remove(obj);
        }

        public virtual async Task<T> GetById(int id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task<T> GetById(string id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task<int> Count(int id)
        {
            return await dbSet.CountAsync();
        }

        public virtual async Task<int> Count()
        {
            return await dbSet.CountAsync();
        }

        public virtual async Task<IEnumerable<T>> GetAll()
        {
            return await dbSet.ToListAsync();
        }

        public virtual async Task<IEnumerable<T>> GetMany(Expression<Func<T, bool>> where)
        {
            return await dbSet.Where(where).ToListAsync();
        }

        public async Task<T> Get(Expression<Func<T, bool>> where)
        {
            return await dbSet.Where(where).FirstOrDefaultAsync<T>();
        }

        #endregion

    }
}
