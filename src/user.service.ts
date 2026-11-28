import { inject, Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject, tap, catchError, finalize, of, Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private usersApi: UserApiService = inject(UserApiService);
  loader: LoaderService = inject(LoaderService);
  message: MessageService = inject(MessageService);
  localStorage: LocalStorageService = inject(LocalStorageService);


  private _usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this._usersSubject$.asObservable();
  private isLoading: boolean = false;

  loadUsers(): void {
    const local: IUser[] | null = this.localStorage.getItemLocalStorage('users');
    if (local) {
      this.setUsers(local);
    } else if (this._usersSubject$.value.length === 0 && this.isLoading === false) {
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
    this.localStorage.setItemLocalStorage('users', value);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

  deleteUser(id: number): void {
    this._usersSubject$.next(
      this._usersSubject$.getValue().filter(user => user.id !== id)
    );
    this.localStorage.setItemLocalStorage('users', this._usersSubject$.getValue());
  }

  createUser(user: IUser): void {
    this._usersSubject$.next([
      ...this._usersSubject$.getValue(),
      user
    ]);
    this.localStorage.setItemLocalStorage('users', this._usersSubject$.getValue());
  }

}
