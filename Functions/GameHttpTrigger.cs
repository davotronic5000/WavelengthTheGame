using System.Net;
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
        [FunctionName("StartGameHttpTrigger")]
        public static async Task<IActionResult> StartGame(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "{roomId}/startGame")] HttpRequest request,
            string roomId,
            ILogger log
        )
        {
            try
            {
                using (CosmosContext db = new CosmosContext())
                {
                    RoomEntity room = db.Rooms.First(e => e.Id.Equals(roomId));
                    if (room.IsStarted == true)
                    {
                        room.IsStarted = true;
                        PlayerEntity randomPlayer = room.Team1.Players.Random(1).First();
                        randomPlayer.IsClueGiver = true;
                        randomPlayer.HasBeenClueGiver = true;
                        room.CurrentTarget = new Random().Next(0, 180);
                        room.GamePhase = GamePhases.CluePhase;

                        await db.SaveChangesAsync();                                                
                    }   

                    return new OkObjectResult(room);                
                }
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
        }

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
                    room.Team1.LeftRightGuess = LeftRightGuess.None;
                    room.Team1.TargetGuess = 0;
                    room.Team2.LeftRightGuess = LeftRightGuess.None;
                    room.Team2.TargetGuess = 0;
                    room.GamePhase = GamePhases.CluePhase;
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