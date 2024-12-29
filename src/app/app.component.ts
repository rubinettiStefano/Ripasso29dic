import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PeopleComponent} from './people/people.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TrollComponent} from './troll/troll.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PeopleComponent, NavbarComponent, TrollComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {


}
