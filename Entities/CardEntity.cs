namespace WavelengthTheGame.Entities
{
    public class CardEntity : BaseEntity, ICardEntity
    {
        public string LeftValue {get;set;}
        public string RightValue {get;set;}
        public bool IsCustom {get;set;}
    }
}