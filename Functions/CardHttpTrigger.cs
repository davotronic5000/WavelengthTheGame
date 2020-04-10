using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using WavelengthTheGame.Data;
using WavelengthTheGame.Helpers;

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
                CosmosContext _db = new CosmosContext();
                return count != null ? 
                new OkObjectResult(_db.Cards.Random(count.GetValueOrDefault())) : new OkObjectResult(_db.Cards);
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
            
        }
    }
}