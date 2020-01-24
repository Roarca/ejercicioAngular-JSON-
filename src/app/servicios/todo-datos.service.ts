import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONEmpleados } from '../interfaces/json-empleados';

@Injectable({
  providedIn: 'root'
})
export class TodoDatosService {

  constructor(private http:HttpClient) { }

  getListadoCompleto(){
    const path='http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<JSONEmpleados>(path);
  }


  getListadoPorId(id:string){
    //http://dummy.restapiexample.com/api/v1/employee/6
    const path='http://dummy.restapiexample.com/api/v1/employee/'+id;
    console.log(this.http.get<JSONEmpleados>(path));
    console.log('--------------------------');
    return this.http.get<JSONEmpleados>(path);
  }

}