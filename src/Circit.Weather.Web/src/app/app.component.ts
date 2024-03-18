import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { WeatherComponent } from './components/weather/weather.component';
import { AstronomyComponent } from './components/astronomy/astronomy.component';
import { TimezoneComponent } from './components/timezone/timezone.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent, AstronomyComponent, TimezoneComponent, CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'circit-weather-web';
  town: string = "Dublin";
  details: string = "Weather";

  openDublin(): void
  {
    this.town = "Dublin";
  }

  openParis(): void
  {
    this.town = "Paris";
  }

  openMadrid(): void
  {
    this.town = "Madrid";
  }

  openWeather(): void
  {
    this.details = "Weather";
  }

  openTimezone(): void
  {
    this.details = "Timezone";
  }

  openAstronomy(): void
  {
    this.details = "Astronomy";
  }
}
