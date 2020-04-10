using System.ComponentModel.DataAnnotations;
namespace WavelengthTheGame.Models
{
    public class NewRoomInboundModel
    {
        [Required]
        public string PlayerName {get;set;}
    }
}