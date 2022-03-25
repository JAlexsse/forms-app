import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favourites: FavouriteGame[];
}

interface FavouriteGame {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame: string = '';
  person: Person = {
    name: 'Jessica',
    favourites: [
      {
        id: 1,
        name: 'Child of Light'
      },
      {
        id: 2,
        name: 'Ni no Kuni'
      }
    ]
  }

  save() {
    console.log('Saved!');
  }


  delete( id: number ) {
    this.person.favourites.splice( id, 1 );
  }

  addGame() {

    const gameToAdd: FavouriteGame = {
      id: this.person.favourites[this.person.favourites.length - 1].id + 1,
      name: this.newGame
    }

    this.person.favourites.push( { ...gameToAdd } ); //se usa el operador spread para asegurarnos que no mandamos ninguna referencia al objeto
    this.newGame = '';
    
  }

}
