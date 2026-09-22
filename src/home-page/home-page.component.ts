import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITourLocation } from '../interfaces/ITour-location';
import { ITourProgram } from '../interfaces/ITour-program';
import { ITravelStory } from "../interfaces/ITravel-story";
import { IPopularDestinations } from '../interfaces/IPopular-destinations';
import { DecimalPipe } from "@angular/common";
import { Message } from "../enums/Message";
import { MessageService } from '../message.service';




@Component({
  selector: 'app-home-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  message: MessageService = inject(MessageService);

  Message = Message;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  inputValue: string = '';

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

}
