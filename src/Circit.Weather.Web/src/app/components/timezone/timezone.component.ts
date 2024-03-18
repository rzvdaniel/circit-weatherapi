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
import { TimezoneService } from '../../services/timezone-service';
import { TimezoneModel } from '../../models/timezone-model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'timezone-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.css'
})
export class TimezoneComponent {

  @Input() town: string = "dublin";
  public model: TimezoneModel;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public townBackgroundClass : string = "background-dublin";
  public weatherAvatar : string = "avatar-weather";
  
  /**
   * Constructor
   */
  constructor(private _timezoneService: TimezoneService, private _changeDetectorRef: ChangeDetectorRef,) {
    this.model = {} as TimezoneModel;
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this._timezoneService.get(this.town).subscribe();

    // Subscribe to model changes
    this._timezoneService.model$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((model: TimezoneModel) => {
        this.model = model;
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnChanges(changes: any) {
     this._timezoneService.get(this.town).subscribe();
     this.townBackgroundClass = "background-" + this.town.toLowerCase();
  }
}
