import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { HeaderComponent } from '../header/header.component';
import { UsersPageComponent } from '../users-page/users-page.component';
import { FooterComponent } from '../footer/footer.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: NotFoundPageComponent }
];
