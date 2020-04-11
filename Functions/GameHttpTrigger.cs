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
using System.Threading.Tasks;

namespace WavelengthTheGame.Functions
{
    public static class GameHttpTrigger
    {
        [FunctionName("SetTargetNumberHttpTrigger")]
        public static async Task<IActionResult> SetTargetNumber(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "{roomId}/setTarget")] HttpRequest request,
            string roomId,
            ILogger log
        )
        {
            try
            {
                int target = new Random().Next(0, 180);
                using (CosmosContext db = new CosmosContext())
                {
                    RoomEntity room = db.Rooms.First(e => e.Id.Equals(roomId));
                    room.CurrentTarget = target;
                    await db.SaveChangesAsync();
                    return new OkObjectResult(room);
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