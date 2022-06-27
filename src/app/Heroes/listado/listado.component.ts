import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroesList: string[] = ['Spiderman','Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  SiHeroeborrado: boolean = false;

  borrarHeroe(): void{
    this.heroeBorrado = this.heroesList.pop() || '';
      if(this.heroeBorrado == ''){
        this.SiHeroeborrado = false;
      }else{
        console.log('Borrando...');
        console.log(this.heroeBorrado);
        this.SiHeroeborrado = true;
      }
  }
}