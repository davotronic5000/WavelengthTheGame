using Microsoft.EntityFrameworkCore;
using System.Configuration;
using WavelengthTheGame.Entities;


namespace WavelengthTheGame.Data
{
    public class CosmosContext : DbContext
    {
        private readonly DbConnectionOptions _dbConnectionOptions;
        public CosmosContext()
        {
            _dbConnectionOptions = new DbConnectionOptions{
                HostUri = ConfigurationManager.AppSettings["CosmosHostUri"],
                AccountKey = ConfigurationManager.AppSettings["CosmosAccountKey"],
                DatabaseName = ConfigurationManager.AppSettings["CosmosDatabaseName"]
            };
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseCosmos(_dbConnectionOptions.HostUri, _dbConnectionOptions.AccountKey, _dbConnectionOptions.DatabaseName);
        
        public DbSet<CardEntity> Cards {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CardEntity>()
            .ToContainer("Cards")
            .HasNoDiscriminator();
        }
    }
}