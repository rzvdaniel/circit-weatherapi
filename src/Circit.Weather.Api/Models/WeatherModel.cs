namespace Circit.Weather.Api.Models
{
    public class WeatherModel
    {
        public Location Location { get; set; }
        public WeatherCurrent Current { get; set; }
    }

    public class WeatherCurrent
    {
        public long Last_updated_epoch { get; set; }
        public string Last_updated { get; set; }
        public double Temp_c { get; set; }
        public double Temp_f { get; set; }
        public int Is_day { get; set; }
        public WeatherCondition Condition { get; set; }
        public double Wind_mph { get; set; }
        public double Wind_kph { get; set; }
        public int Wind_degree { get; set; }
        public string Wind_dir { get; set; }
        public double Pressure_mb { get; set; }
        public double Pressure_in { get; set; }
        public double Precip_mm { get; set; }
        public double Precip_in { get; set; }
        public int Humidity { get; set; }
        public int Cloud { get; set; }
        public double Feelslike_c { get; set; }
        public double Feelslike_f { get; set; }
        public double Vis_km { get; set; }
        public double Vis_miles { get; set; }
        public double Uv { get; set; }
        public double Gust_mph { get; set; }
        public double Gust_kph { get; set; }
    }

    public class WeatherCondition
    {
        public string Text { get; set; }
        public string Icon { get; set; }
        public int Code { get; set; }
    }
}
