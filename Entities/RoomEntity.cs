using System;
using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public class RoomEntity : BaseEntity, IRoomEntity
    {
        public RoomEntity()
        {
            UsedCards = new List<RoomCardEntity>();
            CustomCards = new List<RoomCardEntity>();
        }
        public TeamEntity Team1 {get;set;}
        public TeamEntity Team2 {get;set;}
        public RoomCardEntity CurrentCard {get;set;}
        public int CurrentTarget {get;set;}
        public string GivenClue {get;set;}
        public List<RoomCardEntity> UsedCards {get;set;}
        public List<RoomCardEntity> CustomCards {get;set;}
        public DateTime CreatedDate {get;set;}
        public bool IsStarted {get;set;}
        public GamePhases GamePhase {get; set;}
    }

    public enum GamePhases 
    {
        None = 0,
        CluePhase = 1,
        TeamPhase = 2,
        LeftRightPhase = 3,
        ScoringPhase = 4
    }
}