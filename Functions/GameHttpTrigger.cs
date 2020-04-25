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
                        room.Team1.IsActive = true;
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
                    room.LeftRightGuess = LeftRightGuess.None;
                    room.TargetGuess = 0;
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

        [FunctionName("NextPhaseHttpTrigger")]
        public static async Task<IActionResult> NextPhase(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "{roomId}/nextPhase")] HttpRequest request,
            string roomId,
            ILogger log
        )
        {
            try
            {
                using (CosmosContext db = new CosmosContext())
                {
                    RoomEntity room = db.Rooms.First(e => e.Id.Equals(roomId));
                    if (room.GamePhase == GamePhases.ScoringPhase)
                    {
                        return new OkObjectResult("Room is already on Scoring Phase");
                    }
                    room.GamePhase = (GamePhases)((int)room.GamePhase++);
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
    
        [FunctionName("SetTargetGuessHttpTrigger")]
        public static async Task<IActionResult> SetTargetGuess(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "{roomId}/setTargetGuess/{guess:int}")] HttpRequest request,
            string roomId,
            int guess,
            ILogger log
        )
        {
            try
            {
                using (CosmosContext db = new CosmosContext())
                {
                    RoomEntity room = db.Rooms.First(e => e.Id.Equals(roomId));
                    room.TargetGuess = guess;
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