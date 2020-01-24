import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponentComponent } from './componentes-gestion/consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './componentes-gestion/listado-component/listado-component.component';
import { ToledoComponentComponent } from './componentes-vision/toledo-component/toledo-component.component';
import { MadridComponentComponent } from './componentes-vision/madrid-component/madrid-component.component';


const routes: Routes = [{
  path: 'BuscarComponent',
  component:ConsultaComponentComponent,
},{
  path: 'listarComponent',
  component:ListadoComponentComponent,
},{
  path: 'MadridComponent',
  component:MadridComponentComponent,
},{
  path: 'ToledoComponent',
  component:ToledoComponentComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
