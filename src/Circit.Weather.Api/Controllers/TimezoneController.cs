using Circit.Weather.Api.Models;
using Circit.Weather.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Circit.Weather.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public class TimezoneController(ILogger<TimezoneController> logger,
        WeatherService weatherService) : ControllerBase
    {
        [HttpGet("{town}")]
        public async Task<ActionResult> Get(string town, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(town))
            {
                logger.LogWarning("Town was missing from the request");
                return BadRequest("Town is required");
            }

            var result = await weatherService.HttpClient.GetAsync($"timezone.json?q={town}", cancellationToken);

            result.EnsureSuccessStatusCode();

            var timezoneModel = await result.Content.ReadFromJsonAsync<LocationModel>(cancellationToken);

            return Ok(timezoneModel);
        }
    }
}
