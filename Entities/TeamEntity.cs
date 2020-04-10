using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public class TeamEntity : BaseEntity, ITeamEntity
    {
        public int Score {get;set;}
        public IEnumerable<PlayerEntity> Players {get;set;}
    }
}