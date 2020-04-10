using System;
namespace WavelengthTheGame.Entities
{
    public interface IPlayerEntity : IBaseEntity
    {
         string Name {get;set;}
         bool IsOwner {get;set;}
         bool IsController {get;set;}
         DateTime LastAction {get;set;}
    }
}