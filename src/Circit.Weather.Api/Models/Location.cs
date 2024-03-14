namespace Circit.Weather.Api.Models
{
    public class Location
    {
        public string Name { get; set; }
        public string Region { get; set; }
        public string Country { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string Tz_id { get; set; }
        public long Localtime_epoch { get; set; }
        public string Localtime { get; set; }
    }

}
