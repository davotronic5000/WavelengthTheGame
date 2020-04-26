using System.Runtime.Serialization;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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
        public int TargetGuess {get;set;}
        public LeftRightGuess LeftRightGuess {get;set;}
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum GamePhases 
    {
        [EnumMember(Value = "none")]
        None = 0,
        [EnumMember(Value = "cluePhase")]
        CluePhase = 1,
        [EnumMember(Value = "teamPhase")]
        TeamPhase = 2,
        [EnumMember(Value = "leftRightPhase")]
        LeftRightPhase = 3,
        [EnumMember(Value = "scoringPhase")]
        ScoringPhase = 4
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum LeftRightGuess 
    {    
        [EnumMember(Value = "none")]
        None = 0,  
        [EnumMember(Value = "left")]    
        Left = 1,
        [EnumMember(Value = "right")]
        Right = 2
    }
}