import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { LocalStorageService } from '../local-storage.service';
import './training'
import { Colors } from '../enums/Color';
import './collection';
import { ITourProgram } from '../interfaces/ITour-program';
import { FormsModule } from '@angular/forms';
import { ITourLocation } from '../interfaces/ITour-location';
import { IPopularDestinations } from '../interfaces/IPopular-destinations';
import { DecimalPipe, NgComponentOutlet, NgTemplateOutlet } from "@angular/common";
import { ITravelStory } from "../interfaces/ITravel-story";
import { Message } from "../enums/Message";

@Component({
  selector: 'app-root',
  imports: [FormsModule, DecimalPipe, NgTemplateOutlet],
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
  Message = Message;

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

  popularDestinations: IPopularDestinations[] = [
    {
      id: 1,
      src: 'mountain-lake.png',
      points: 4.9,
      title: 'Озеро возле гор',
      category: 'романтическое приключение',
      price: 480
    },
    {
      id: 2,
      src: 'mountain-night.png',
      points: 4.5,
      title: 'Ночь в горах',
      category: 'в компании друзей',
      price: 500
    },
    {
      id: 3,
      src: 'mountain-stretching.png',
      points: 5.0,
      title: 'Растяжка в горах',
      category: 'для тех, кто забоится о себе',
      price: 230
    }
  ];

  travelStories: ITravelStory[] = [
    {
      id: 1,
      src: 'italy.png',
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023'
    },
    {
      id: 2,
      src: 'flight.png',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023'
    },
    {
      id: 3,
      src: 'narrow-street.png',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023'
    },
    {
      id: 4,
      src: 'taj-mahal.png',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023'
    }
  ];

  message: MessageService = inject(MessageService);
  storage: LocalStorageService = inject(LocalStorageService);

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
    this.storage.setItemLocalStorage('lastVisit', new Date().toLocaleString());
  }

  private saveVisitCount(): void {
    let count = this.storage.getItemLocalStorage<string, number>('visitCount') || 0;
    this.storage.setItemLocalStorage('visitCount', ++count);

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
