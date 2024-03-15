export interface WeatherModel {
    Location: {
        Name: string;
        Region: string;
        Country: string;
        Lat: number;
        Lon: number;
        Tz_id: string;
        Localtime_epoch: number;
        Localtime: string;
    }
    Current: {
        Last_updated_epoch: number;
        Last_updated: string;
        Temp_c: number;
        Temp_f: number;
        Is_day: number;
        Condition: {
            Text: string;
            Icon: string;
            Code: number;
        }
        Wind_mph: number;
        Wind_kph: number;
        Wind_degree: number;
        Wind_dir: string;
        Pressure_mb: number;
        Pressure_in: number;
        Precip_mm: number;
        Precip_in: number;
        Humidity: number;
        Cloud: number;
        Feelslike_c: number;
        Feelslike_f: number;
        Vis_km: number;
        Vis_miles: number;
        Uv: number;
        Gust_mph: number;
        Gust_kph: number;   
    };
}
