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
        public List<PlayerEntity> Players {get;set;}
        public int TargetGuess {get;set;}
        public LeftRightGuess LeftRightGuess {get;set;}
    }

    public enum LeftRightGuess 
    {          
        Left = 1,
        Right = 2
    }
}

