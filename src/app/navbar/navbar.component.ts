import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgStyle
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  larghezza=100;

  larghezzaPerc() {
    return this.larghezza+"%";
  }

  cambiaLarghezza($event: WheelEvent) {
    this.larghezza-= $event.deltaY*0.1;
  }

  paperinoControTutti($event:Event) {
    alert("Non ci provare più maledetto, nessuno mi copia");
    $event.preventDefault();
  }
}
