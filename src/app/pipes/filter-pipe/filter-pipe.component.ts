import { Component } from '@angular/core';
export interface Person {
  name: string;
  age: number;
  country: string;
}
@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.scss']
})
export class FilterPipeComponent {
  people: Person[] = [];
  searchTerm: string;
  names = ['Maverick', 'Stanislav', 'Arxero', 'Feruchio', 'Mavericus', 'Arxiour'];

  constructor(){
    this.names.forEach((e,i)=> this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    }))
    console.log(this.people)
  }
}
