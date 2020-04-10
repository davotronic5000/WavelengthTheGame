using System;
using Microsoft.EntityFrameworkCore;
using WavelengthTheGame.Entities;


namespace WavelengthTheGame.Data
{
    public class CosmosContext : DbContext
    {
        private readonly DbConnectionOptions _dbConnectionOptions;
        public CosmosContext()
        {
            _dbConnectionOptions = new DbConnectionOptions{
                HostUri = Environment.GetEnvironmentVariable("CosmosHostUri"),
                AccountKey = Environment.GetEnvironmentVariable("CosmosAccountKey"),
                DatabaseName = Environment.GetEnvironmentVariable("CosmosDatabaseName")
            };
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseCosmos(_dbConnectionOptions.HostUri, _dbConnectionOptions.AccountKey, _dbConnectionOptions.DatabaseName);
        
        public DbSet<CardEntity> Cards {get;set;}
        public DbSet<RoomEntity> Rooms {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CardEntity>()
            .ToContainer("Cards")
            .HasNoDiscriminator();

            modelBuilder.Entity<RoomEntity>()
                        .ToContainer("Rooms")
                        .HasNoDiscriminator();
            modelBuilder.Entity<RoomEntity>()
                        .OwnsOne(e => e.Team1)
                        .OwnsMany(e => e.Players);
            modelBuilder.Entity<RoomEntity>()
                        .OwnsOne(e => e.Team2)
                        .OwnsMany(e => e.Players);                    
        }
    }
}