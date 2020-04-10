using System.ComponentModel.DataAnnotations;
namespace WavelengthTheGame.Entities
{
    public abstract class BaseEntity : IBaseEntity
    {
        [Required]
        public string Id {get;set;}
    }
}