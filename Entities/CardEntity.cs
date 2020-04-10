using System.ComponentModel.DataAnnotations;
namespace WavelengthTheGame.Entities
{
    public class CardEntity : BaseEntity, ICardEntity
    {
        [Required]
        public string LeftValue {get;set;}
        [Required]
        public string RightValue {get;set;}
        [Required]
        public bool IsCustom {get;set;}
    }
}