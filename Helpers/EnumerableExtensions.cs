using System.Linq;
using System;
using System.Collections.Generic;
using WavelengthTheGame.Entities;

namespace WavelengthTheGame.Helpers
{
    public static class EnumerableExtensions
    {
        public static IEnumerable<T> Random<T>(this IEnumerable<T> enumerable, int count) => enumerable.OrderBy(e => Guid.NewGuid()).Take(count);
    }
}