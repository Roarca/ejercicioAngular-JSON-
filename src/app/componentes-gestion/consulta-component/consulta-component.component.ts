import { Component, OnInit } from '@angular/core';
import { TodoDatosService } from 'src/app/servicios/todo-datos.service';
import { JSONEmpleados } from '../../interfaces/json-empleados';
import { Empleados } from 'src/app/interfaces/empleados';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent implements OnInit {
//  personita:Persona={nombre:'',apellidos:'',poblacion:''}
  e1:Empleados={id:'',employee_name:'',employee_age:'',employee_salary:'',profile_image:''};
  valorIPC=null;
  private JSonNormal:JSONEmpleados;

  constructor(private ts:TodoDatosService) { }

  ngOnInit() {
   
  }

  verTareaUnica(id:string,valoripc:number){
    //Funcion huerfana dentro del subscribe( Cuando haya respuesta correcta)
    // el this.multiples metes un POST
    this.ts.getListadoCompleto().subscribe(multiplesJSON=>
    {
      this.e1=multiplesJSON.data[parseInt(id)-1];
      this.valorIPC = parseInt(this.e1.employee_salary)*valoripc;
      console.log(this.e1);
    });
  }

 
}
