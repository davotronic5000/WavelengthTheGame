namespace WavelengthTheGame.Entities
{
    public interface ICardEntity : IBaseEntity
    {
         string LeftValue {get;set;}
         string RightValue {get;set;}
         public bool IsCustom {get;set;}
    }
}