import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private _loaderSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loader$: Observable<boolean> = this._loaderSubject$.asObservable();

  showLoader(): void {
    this._loaderSubject$.next(true);
  }

  hideLoader(): void {
    this._loaderSubject$.next(false);
  }

}
