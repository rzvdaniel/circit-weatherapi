# circit-weatherapi

## Overview

This project demonstrates [Weatherapi](https://www.weatherapi.com/) integration into a **.NET Web.Api** and **Angular website**.

## 1. Circit.Weather.Api
The Api connects to [Weatherapi](https://www.weatherapi.com/) service to download weather, timezone and astronomy data. 

### Tech stack
.NET 8 Web.Api, C#

### Configure
It requires a ``RapidApiKey`` which must be added into corresponding configuration in ``appsettings.json``.

### Build
Hit F5 and watch the Api running the **Swagger UI** (leave it running because the Web application depends on it).

## 2. Circit.Weather.Web

The Web application connects to the Api above to retrieve and display weather information for three preconfigured towns: Dublin, Paris and Madrid.

### Tech stack
Angular 17.3.0, Typescript, Material Design

### Configure
Not configuration needed in Development, the website is already ready to connect to the Api (in development mode).

### Build
Run ``npm start`` into the root website folder at https://github.com/rzvdaniel/circit-weatherapi/tree/main/src/Circit.Weather.Web

### Screenshot Circit Weather Web

![Screenshot 01](resources/Screenshot-2024-03-15-141627.png?raw=true "Weather Web")

### Screenshot Circit Weather Api
![Screenshot 01](resources/Screenshot-2024-03-15-174204.png?raw=true "Weather Api")
