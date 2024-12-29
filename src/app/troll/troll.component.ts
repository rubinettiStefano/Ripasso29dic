import { Component } from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-troll',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './troll.component.html',
  standalone: true,
  styleUrl: './troll.component.css'
})
export class TrollComponent {

  counter:number=0;
  sforato:boolean=false;
  top:number = 10;
  left:number = 20;
  l:number = 40;
  sposta($event: PointerEvent)
  {

    this.top = Math.random()*80;
    this.left = Math.random()*80;
    this.counter++;
    if(this.counter>3)
    {
      this.l=500;
      this.sforato=true;
    }

  }
}
