import { Component, ChangeDetectorRef, Input } from '@angular/core';
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
  selector: 'card-component',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() town: string = "dublin";
  model: WeatherModel;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

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
    // Store the user on the user service
    this._weatherService.get(this.town).subscribe();

    // Subscribe to model changes
    this._weatherService.model$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((model: WeatherModel) => {
        this.model = model;

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  /**
     * Open the shortcuts panel
     */
  openDublin(): void {
    window.open('https://www.google.com/maps/place/Dublin', '_blank');
  }
}
