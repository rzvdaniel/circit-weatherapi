import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { WeatherModel } from '../models/weather-model';
import { Observable, ReplaySubject, tap} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private _httpClient = inject(HttpClient);
    private _model: ReplaySubject<WeatherModel> = new ReplaySubject<WeatherModel>(1);

    /**
     * Constructor
     */
    constructor()
    {
    }

     // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set model(value: WeatherModel)
    {
        // Store the value
        this._model.next(value);
    }

    get model$(): Observable<WeatherModel>
    {
        return this._model.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    get(): Observable<WeatherModel>
    {
        return this._httpClient.get<WeatherModel>(`https://localhost:7263/weather/dublin`).pipe(
            tap((model:WeatherModel) =>
            {
                this._model.next(model);
            })     
        );
    }
}
