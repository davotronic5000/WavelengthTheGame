using System;
using System.Collections.Generic;

namespace WavelengthTheGame.Entities
{
    public interface IRoomEntity : IBaseEntity
    {
         TeamEntity Team1 {get;set;}
         TeamEntity Team2 {get;set;}
         CardEntity CurrentCard {get;set;}
         int CurrentTarget {get;set;}
         IEnumerable<CardEntity> UsedCards {get;set;}
         IEnumerable<CardEntity> CustomCards {get;set;}
         DateTime CreatedDate {get;set;}
    }
}