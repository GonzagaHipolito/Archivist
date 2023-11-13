import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { SubirComponent } from './component/subir/subir.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"subir",component:SubirComponent},
  {path:"inicio",component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
