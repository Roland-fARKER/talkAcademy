import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environments';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CursosModule } from './View/modulocursos/cursos.module';
import { EstudiantesModule } from './View/moduloestudiantes/estudiantes.module';
import { ModulomatriculaModule } from './View/modulomatricula/modulomatricula.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ButtonModule, 
    ToastModule,
    MessagesModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CursosModule,
    EstudiantesModule,
    ModulomatriculaModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
