using Circit.Weather.Api.Models;
using Circit.Weather.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Circit.Weather.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public class AstronomyController(ILogger<AstronomyController> logger,
        WeatherService weatherService) : ControllerBase
    {
        [HttpGet("{town}/{date?}")]
        public async Task<ActionResult> Get(string town, string? date, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(town))
            {
                logger.LogWarning("Town was missing from the request");
                return BadRequest("Town is required");
            }

            var result = await weatherService.HttpClient.GetAsync($"astronomy.json?q={town}&dt={date}", cancellationToken);

            result.EnsureSuccessStatusCode();

            var astronomyModel = await result.Content.ReadFromJsonAsync<AstronomyModel>(cancellationToken);

            return Ok(astronomyModel);
        }
    }
}
