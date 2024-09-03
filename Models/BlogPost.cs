using System;
using System.ComponentModel.DataAnnotations;

namespace FrybreadFusion.Models
{
    public class BlogPost
    {
        public int Id { get; set; }

        [Required]
        public string? Title { get; set; }

        public string? Content { get; set; }

        public string? Author { get; set; }

        public DateTime DatePosted { get; set; } = DateTime.Now;
    }
}
