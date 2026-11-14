import { inject, Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject, tap, catchError, finalize, of, Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private usersApi: UserApiService = inject(UserApiService);
  loader: LoaderService = inject(LoaderService);
  message: MessageService = inject(MessageService);


  private _usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this._usersSubject$.asObservable();
  private isLoading: boolean = false;

  loadUsers(): void {
    if (this._usersSubject$.value.length === 0 && this.isLoading === false) {
      this.isLoading = true;
      this.loader.showLoader();
      this.usersApi.getUsers().pipe(
        tap((users: IUser[]) => {
          this.setUsers(users);
        }),

        catchError(() => {
          this.message.showHttpError();
          return of([]);
        }),

        finalize(() => {
          this.isLoading = false;
          this.loader.hideLoader();
        })
      ).subscribe()
    }
  }

  setUsers(value: IUser[]): void {
    this._usersSubject$.next(value);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

}
