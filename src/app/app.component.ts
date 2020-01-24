import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examenAngular-RA';
  
  constructor(private roter:Router){

  }

  listarPostFuncion(){
    this.roter.navigate(['listarComponent']);
  }
  tareaUnicaFuncion(){
    this.roter.navigate(['BuscarComponent']);
  }
  verMadrid(){
    this.roter.navigate(['MadridComponent']);
  }
  verToledo(){
    this.roter.navigate(['ToledoComponent']);
  }

}
