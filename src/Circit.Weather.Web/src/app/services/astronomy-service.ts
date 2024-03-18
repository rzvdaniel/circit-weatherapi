import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AstronomyModel } from '../models/astronomy-model';
import { Observable, ReplaySubject, tap} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AstronomyService {

    private _httpClient = inject(HttpClient);
    private _model: ReplaySubject<AstronomyModel> = new ReplaySubject<AstronomyModel>(1);

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    set model(value: AstronomyModel)
    {
        // Store the value
        this._model.next(value);
    }

    get model$(): Observable<AstronomyModel>
    {
        return this._model.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    get(town: string): Observable<AstronomyModel>
    {
        return this._httpClient.get<AstronomyModel>(`${environment.apiUri}/astronomy/${town}`).pipe(
            tap((model:AstronomyModel) =>
            {
                this._model.next(model);
            })     
        );
    }
}
