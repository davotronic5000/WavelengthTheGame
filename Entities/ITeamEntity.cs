using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public interface ITeamEntity : IBaseEntity
    {
         int Score {get;set;}
         IEnumerable<PlayerEntity> Players {get;set;}
    }
}