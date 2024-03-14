namespace Circit.Weather.Api.Models
{
    public class AstronomyModel
    {
        public Location Location { get; set; }
        public Astronomy Astronomy { get; set; }
    }

    public class Astronomy
    {
        public Astro Astro { get; set; }
    }

    public class Astro
    {
        public string Sunrise { get; set; }
        public string Sunset { get; set; }
        public string Moonrise { get; set; }
        public string Moonset { get; set; }
        public string Moon_phase { get; set; }
        public int Moon_illumination { get; set; }
        public int Is_moon_up { get; set; }
        public int Is_sun_up { get; set; }
    }
}
