import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { TimezoneModel } from '../models/timezone-model';
import { Observable, ReplaySubject, tap} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TimezoneService {

    private _httpClient = inject(HttpClient);
    private _model: ReplaySubject<TimezoneModel> = new ReplaySubject<TimezoneModel>(1);

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    set model(value: TimezoneModel)
    {
        // Store the value
        this._model.next(value);
    }

    get model$(): Observable<TimezoneModel>
    {
        return this._model.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    get(town: string): Observable<TimezoneModel>
    {
        return this._httpClient.get<TimezoneModel>(`${environment.apiUri}/timezone/${town}`).pipe(
            tap((model:TimezoneModel) =>
            {
                this._model.next(model);
            })     
        );
    }
}
