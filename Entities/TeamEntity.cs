using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public class TeamEntity : BaseEntity, ITeamEntity
    {
        public TeamEntity()
        {
            Players = new List<PlayerEntity>();
        }
        public int Score {get;set;}
        public bool IsActive {get;set;}
        public List<PlayerEntity> Players {get;set;}
    }

    
}

