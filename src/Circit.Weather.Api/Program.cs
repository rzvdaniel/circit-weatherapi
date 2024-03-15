using Circit.Weather.Api.Services;

var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .Build();

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddHttpClient<WeatherService>(client =>
{
    client.BaseAddress = new Uri(configuration["WeatherApi:BaseUri"]);
    client.DefaultRequestHeaders.Add("X-RapidAPI-Key", configuration["WeatherApi:RapidApiKey"]);
    client.DefaultRequestHeaders.Add("X-RapidAPI-Host", configuration["WeatherApi:RapidApiHost"]);
    client.DefaultRequestHeaders.Add("User-Agent", "Circit.Weather.Api");
});

var app = builder.Build();

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
