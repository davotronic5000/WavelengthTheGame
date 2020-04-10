using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using WavelengthTheGame.Data;
using WavelengthTheGame.Helpers;
using WavelengthTheGame.Models;
using WavelengthTheGame.Entities;

namespace WavelengthTheGame.Functions
{
    public static class RoomHttpTrigger
    {
        [FunctionName("GetRoomHttpTrigger")]
        public static async Task<IActionResult> GetRoom(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route= "room/{id}")] HttpRequest request,
            string id,
            ILogger log
        )
        {
            try
            {
                CosmosContext db = new CosmosContext();                
                return new OkObjectResult( await db.Rooms.FirstAsync(e => e.Id.Equals(id)));
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
        }

        [FunctionName("CreateRoomHttpTrigger")]
        public static async  Task<IActionResult> CreateRoom(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route="room")] NewRoomInboundModel model,
            ILogger log
        )
        {
            try
            {
                CosmosContext db = new CosmosContext();
                RoomEntity room = new RoomEntity{
                    Team1 = new TeamEntity
                    {
                        Id = Guid.NewGuid().ToString(),
                        Players = new List<PlayerEntity>
                        {
                            new PlayerEntity
                            {
                                Id = Guid.NewGuid().ToString(),
                                Name = model.PlayerName,
                                LastAction = DateTime.UtcNow,
                                IsOwner = true,
                                IsController = true
                            }
                        }
                    },
                    Team2 = new TeamEntity{Id = Guid.NewGuid().ToString()},
                    CreatedDate = DateTime.UtcNow
                };
                room.Id = room.UniqueId(db.Rooms.AsQueryable());
                
                db.Rooms.Add(room);
                await db.SaveChangesAsync();
                return new OkObjectResult(room);
            }
            catch (Exception ex)
            {
                log.LogError(new EventId(), ex, ex.FullMessage());
                throw;
            }
        }
    }
}