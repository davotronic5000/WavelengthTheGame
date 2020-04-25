using System;
using System.Collections.Generic;

namespace WavelengthTheGame.Entities
{
    public interface IRoomEntity : IBaseEntity
    {
         TeamEntity Team1 {get;set;}
         TeamEntity Team2 {get;set;}
         RoomCardEntity CurrentCard {get;set;}
         int CurrentTarget {get;set;}
         List<RoomCardEntity> UsedCards {get;set;}
         List<RoomCardEntity> CustomCards {get;set;}
         DateTime CreatedDate {get;set;}
         bool IsStarted {get;set;}
         GamePhases GamePhase {get;set;}
        int TargetGuess {get;set;}
        LeftRightGuess LeftRightGuess {get;set;}
    }
}