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
import { AstronomyService } from '../../services/astronomy-service';
import { AstronomyModel } from '../../models/astronomy-model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'astronomy-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './astronomy.component.html',
  styleUrl: './astronomy.component.css'
})
export class AstronomyComponent {

  @Input() town: string = "dublin";
  public model: AstronomyModel;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public townBackgroundClass : string = "background-dublin";
  
  /**
   * Constructor
   */
  constructor(private _astronomyService: AstronomyService, private _changeDetectorRef: ChangeDetectorRef,) {
    this.model = {} as AstronomyModel;
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this._astronomyService.get(this.town).subscribe();

    // Subscribe to model changes
    this._astronomyService.model$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((model: AstronomyModel) => {
        this.model = model;
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnChanges(changes: any) {
     this._astronomyService.get(this.town).subscribe();
     this.townBackgroundClass = "background-" + this.town.toLowerCase();
  }
}
