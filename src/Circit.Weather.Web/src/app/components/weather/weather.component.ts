import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WeatherService } from '../../services/weather-service';
import { WeatherModel } from '../../models/weather-model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'weather-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  @Input() town: string = "dublin";
  public model: WeatherModel;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public townBackgroundClass : string = "background-dublin";
  public weatherAvatar : string = "avatar-weather";
  
  /**
   * Constructor
   */
  constructor(private _weatherService: WeatherService, private _changeDetectorRef: ChangeDetectorRef,) {
    this.model = {} as WeatherModel;
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this._weatherService.get(this.town).subscribe();

    // Subscribe to model changes
    this._weatherService.model$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((model: WeatherModel) => {
        this.model = model;
        this.weatherAvatar = "https:" + this.model.current.condition.icon;
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnChanges(changes: any) {
     this._weatherService.get(this.town).subscribe();
     this.townBackgroundClass = "background-" + this.town.toLowerCase();
     this.weatherAvatar = this.model?.current?.condition.icon ? "https:" + this.model?.current?.condition.icon : "";
  }
}
