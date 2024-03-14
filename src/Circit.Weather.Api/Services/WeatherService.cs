namespace Circit.Weather.Api.Services
{
    public class WeatherService
    {
        public WeatherService(HttpClient httpClient)
        {
            HttpClient = httpClient;
        }

        public HttpClient HttpClient { get; }
    }
}
