import { Component } from '@angular/core';
import './training'
import { Colors } from '../enums/Color';
import './collection';
import { ITourProgram } from '../interfaces/ITour-program';
import { FormsModule } from '@angular/forms';
import { ITourLocation } from '../interfaces/ITour-location';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  count: number = 0;
  companyName: string = 'РУМТИБЕТ';
  inputValue: string = '';
  isLoaded: boolean = false;
  selectedDate: string = '';
  selectedLocation: string = '';
  selectedParticipants: string = '';
  buttonName: 'Показать кликер' | 'Показать дату' = 'Показать кликер';
  hasShowDate: boolean = true;
  date: string = new Date().toLocaleString();

  tourPrograms: ITourProgram[] = [
    {
      id: 1,
      src: '/icons/guide.svg',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      src: '/icons/safety.svg',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      src: '/icons/price.svg',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  tourLocations: ITourLocation[] = [
    {
      id: 1,
      locationName: 'Массив Каменного Ветра'
    },
    {
      id: 2,
      locationName: 'Северный Хребет'
    },
    {
      id: 3,
      locationName: 'Долина Семи Озер'
    },
    {
      id: 4,
      locationName: 'Долина Туманных Вершин'
    },
    {
      id: 5,
      locationName: 'Лесная Поляна'
    },
    {
      id: 6,
      locationName: 'Горный массив Аран'
    },
    {
      id: 7,
      locationName: 'Хребет Одинокого Пика'
    }
  ];

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
    this.showDate();
    this.loading();
  }

  checkColor(color: Colors): boolean {
    return Object.values(Colors).includes(color);
  }

  private saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toLocaleString());
  }

  private saveVisitCount(): void {
    let count = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', String(++count));
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

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 0) {
      this.count--;
    }

  }

  private loading(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000)
  }

}
