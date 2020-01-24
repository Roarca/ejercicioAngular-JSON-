import { Component, OnInit } from '@angular/core';
import { TodoDatosService } from 'src/app/servicios/todo-datos.service';
import { JSONEmpleados } from '../../interfaces/json-empleados';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {
  multiples_post=null;

  constructor(private ts:TodoDatosService) { }

  ngOnInit() {
    this.verListadoCompleto();

  }

  verListadoCompleto(){
    //Funcion huerfana dentro del subscribe( Cuando haya respuesta correcta)
    // el this.multiples metes un POST
    this.ts.getListadoCompleto().subscribe(JSONEmpleados=>{this.multiples_post=JSONEmpleados.data});
  }
}
