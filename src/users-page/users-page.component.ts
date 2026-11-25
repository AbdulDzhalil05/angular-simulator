import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { AsyncPipe } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { IUser } from '../interfaces/IUser';
import { FormsModule } from '@angular/forms';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, UserCardComponent, UserCreateComponent, FormsModule, UsersFilterComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  user: UserService = inject(UserService);
  private search$ = new BehaviorSubject<string>('');
  filteredUsers$ = combineLatest([this.user.users$, this.search$]).pipe(
    map(([users, search]) => users.filter(user => user.name.trim().toLowerCase().includes(search)))
  );

  id!: number;
  isModalOpen: boolean = false;

  constructor() {
    this.user.loadUsers();
  }

  deleteUser(id: number): void {
    this.user.deleteUser(id);
  }

  openModalForm(): void {
    this.isModalOpen = true;
    document.body.style.overflow = "hidden";
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  createUser(user: IUser): void {
    this.user.createUser(user);
  }

  onFilterDate(name: string): void {
    this.search$.next(name);
  }

}
