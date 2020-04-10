using System;
using System.Collections.Generic;
namespace WavelengthTheGame.Entities
{
    public class RoomEntity : BaseEntity, IRoomEntity
    {
        public TeamEntity Team1 {get;set;}
        public TeamEntity Team2 {get;set;}
        public CardEntity CurrentCard {get;set;}
        public int CurrentTarget {get;set;}
        public IEnumerable<CardEntity> UsedCards {get;set;}
        public IEnumerable<CardEntity> CustomCards {get;set;}
        public DateTime CreatedDate {get;set;}
    }
}