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
        public List<RoomCardEntity> UsedCards {get;set;}
        public List<RoomCardEntity> CustomCards {get;set;}
        public DateTime CreatedDate {get;set;}
    }
}