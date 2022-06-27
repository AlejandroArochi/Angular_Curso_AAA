import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <span>{{titulo}}</span>    
            <h1>La base es: <strong> + {{base}} </strong></h1>

            <button (click)="Acomular( base );"> + {{base}}</button>
            <span>{{numero}}</span>
            <button (click)="Acomular( base * -1 );"> - {{base}}</button>
    `
})

export class contadorComponent {
    titulo : string = 'Contador App';
    numero : number = 10; 
    base : number = 5;
  
    Acomular(valor: number){
    this.numero += valor; 
}
}