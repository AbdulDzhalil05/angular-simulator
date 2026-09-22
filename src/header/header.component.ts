import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../interfaces/INavigation';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  companyName: string = 'РУМТИБЕТ';
  hasShowDate: boolean = true;
  date: string = new Date().toLocaleString();
  count: number = 0;
  buttonName: 'Показать кликер' | 'Показать дату' = 'Показать кликер';

  navigation: INavigation[] = [
    {
      id: 1,
      itemName: 'Главная',
      routerLink: 'home'
    },
    {
      id: 2,
      itemName: 'Пользователи',
      routerLink: 'users'
    }
  ];

  constructor() {
    this.showDate();
  }


  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 0) {
      this.count--;
    }

  }

  replaceButton(): void {
    if (this.buttonName === 'Показать дату') {
      this.hasShowDate = true;
      this.buttonName = 'Показать кликер';
    } else {
      this.hasShowDate = false;
      this.buttonName = 'Показать дату';
    }
  }

  private showDate(): void {
    setInterval(() => {
      this.date = new Date().toLocaleString();
    }, 1000);
  }

}
