import { Component } from '@angular/core';
import './training'
import { Colors } from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
  }

  companyName: string = 'РУМТИБЕТ';

  checkColor(color: Colors): boolean {
    return Object.values(Colors).includes(color);
  }

  saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toLocaleString());
  }

  saveVisitCount(): void {
    let count = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', String(++count));
  }

}


