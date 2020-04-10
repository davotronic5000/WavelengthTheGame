using System.ComponentModel.DataAnnotations;
using System;
namespace WavelengthTheGame.Entities
{
    public class PlayerEntity : BaseEntity, IPlayerEntity
    {
        [Required]
        public string Name {get;set;}
        public bool IsOwner {get;set;}
        public bool IsController {get;set;}
        public DateTime LastAction {get;set;}
    }
}