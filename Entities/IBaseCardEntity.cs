namespace WavelengthTheGame.Entities
{
    public interface IBaseCardEntity : IBaseEntity
    {
        string LeftValue {get;set;}
        string RightValue {get;set;}
        bool IsCustom {get;set;}
    }
}