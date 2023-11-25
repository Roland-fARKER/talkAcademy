import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CursosComponent } from './cursos/cursos.component';
import { MatriculasComponent } from './matriculas/matriculas.component'; 


const routes: Routes = [
  {
    path: '', redirectTo: 'Login',pathMatch:'full'
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Dashboard', component: DashboardComponent, children:[
      {
        path:'Estudiantes', component: EstudiantesComponent
      },
      {
        path:'Cursos', component: CursosComponent
      },
      {
        path:'Matriculas', component: MatriculasComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
