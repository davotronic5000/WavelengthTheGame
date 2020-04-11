using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using WavelengthTheGame.Data;
using WavelengthTheGame.Helpers;
using WavelengthTheGame.Entities;
using System.Linq;

namespace WavelengthTheGame.Functions
{
    public static class CardHttpTrigger
    {      

        [FunctionName("GetCardsHttpTrigger")]
        public static IActionResult GetCards(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "cards/{count:int?}")] HttpRequest request,
            int? count,
            ILogger log
        ) 
        {
            try
            {
                using (CosmosContext db = new CosmosContext())
                {
                    return count != null ? 
                    new OkObjectResult(db.Cards.Random(count.GetValueOrDefault())) : new OkObjectResult(db.Cards);
                }
                
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
            
        }

        [FunctionName("GetCardsNotUsedInRoomTrigger")]
        public static IActionResult GetCardsNotUsedInRoom (
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "cards/{roomId}/{count:int?}")] HttpRequest request,
            string roomId,
            int? count,
            ILogger log
        )
        {
            try
            {
                using (CosmosContext db = new CosmosContext())
                {
                    List<string> usedCards = db.Rooms.First(e => e.Id.Equals(roomId)).UsedCards.Select(e => e.Id).ToList();
                    usedCards.Add(db.Rooms.First(e=> e.Id.Equals(roomId)).CurrentCard.Id);
                    List<CardEntity> cards = db.Cards.Where(e => !usedCards.Contains(e.Id)).ToList();
                    return count != null ?
                        new OkObjectResult(cards.Random(count.GetValueOrDefault())) : new OkObjectResult(cards);
                }
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
        }
    }
}