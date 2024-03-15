# circit-weatherapi

## Overview

This project demonstrates Rapidapi Weather integration into a Web.Api and Angular application.

It consists of two projects:

## 1. Circit.Weather.Api
The Api connects to Rapidapi -> Weatherapi service to download weather, timezone and astronomy data. 

### Configure
It requires a RapidApiKey which must be added into corresponding configuration in appsettings.json.

### Build
Hit F5 and see it the Api running the Swagger UI. Leave it running because the Web application depends on it.

## 2. Circit.Weather.Web

The Web application connects to the Api above to retrieve and display weather information for three preconfigured towns: Dublin, Paris and Madrid.

### Configure
Not configuration needed in Development. The website is already ready to connect to the Api in evelopment mode.

### Build
Run ``npm start`` into the root website folder at https://github.com/rzvdaniel/circit-weatherapi/tree/main/src/Circit.Weather.Web

### Circit Weather Web

![Screenshot 01](resources/Screenshot-2024-03-15-141627.png?raw=true "Weather Web")

### Circit Weather Api
![Screenshot 01](resources/Screenshot-2024-03-15-174204.png?raw=true "Weather Api")
