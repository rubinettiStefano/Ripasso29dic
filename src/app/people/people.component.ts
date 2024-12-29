import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/Person';
import {NgForOf, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-people',
  imports: [
    NgForOf,
    FormsModule,
    NgStyle
  ],
  templateUrl: './people.component.html',
  standalone: true,
  styleUrl: './people.component.css'
})
export class PeopleComponent {


  per:Person = {name:"",surname:"",age:null}
  //dichiaro la variabile persons come un vettore di Person (il ! dice di non preoccuparsi, gli verrà assegnato)
  persons!: Person[];
  //@Autowired HttpClient http;
  colore: string[] = ['white','white','white'];
  constructor(private http: HttpClient)
  {
    //in cosa deve DESERIALIZZARE in body json della RESPONSE
    //pari pari al @RequestBody in spring
    //subscribe esegue una CALLBACK quando arriva la response, passandogli il
    //body deserializzato come parametro
    this.http.get<Person[]>("/api/persons").subscribe(res => this.persons = res);
    //Perchè ho fatto tutto questo lavoro, quale era il mio obiettivo?
    //per avere il mannaggina di vettore di persone persons pieno
  }


  salva()
  {
    this.http.post<Person>("/api/persons",this.per).subscribe(res => this.persons.push(res));
    this.per = {name:"",surname:"",age:null};
  }

  sporca(numero:number)
  {
    this.colore[numero]='gray';
  }
}
