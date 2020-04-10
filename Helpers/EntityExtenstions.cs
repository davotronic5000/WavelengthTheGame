using System.Text;
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
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char letter;
            string returnValue;

            for (int i = 0; i < 5; i++)
            {
                double number = random.NextDouble();
                int shift = Convert.ToInt32(Math.Floor(25*number));
                letter = Convert.ToChar(shift + 65);
                builder.Append(letter);
            }
            returnValue = builder.ToString();

            if (existingEntities.Count(e => e.Id.Equals(returnValue)) > 0)
            {
                returnValue = UniqueId(entity, existingEntities);
            }

            return returnValue;
        }
    }
}