using System.Linq;
using System;
using System.Collections.Generic;
using WavelengthTheGame.Entities;

namespace WavelengthTheGame.Helpers
{
    public static class EntityExtenstions
    {
        public static string UniqueId<T>(this T entity, IEnumerable<T> existingEntities) where T : IBaseEntity
        {
            string newId = Guid.NewGuid().ToString().GetHashCode().ToString().Substring(0,5);

            if (existingEntities.Count(e => e.Id.Equals(newId)) > 0)
            {
                newId = UniqueId(entity, existingEntities);
            }

            return newId;
        }
    }
}