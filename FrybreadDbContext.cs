using Microsoft.EntityFrameworkCore;
using FrybreadFusion.Models;

namespace FrybreadFusion.Data
{
    public class FrybreadDbContext : DbContext
    {
        public FrybreadDbContext(DbContextOptions<FrybreadDbContext> options)
            : base(options)
        {
        }

        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
