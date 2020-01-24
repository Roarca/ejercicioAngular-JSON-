import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './componentes-gestion/consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './componentes-gestion/listado-component/listado-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToledoComponentComponent } from './componentes-vision/toledo-component/toledo-component.component';
import { MadridComponentComponent } from './componentes-vision/madrid-component/madrid-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ToledoComponentComponent,
    MadridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
