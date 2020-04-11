using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public interface ITeamEntity : IBaseEntity
    {
         int Score {get;set;}
         List<PlayerEntity> Players {get;set;}
         int TargetGuess {get;set;}
         LeftRightGuess LeftRightGuess {get;set;}
    }
}