import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesService } from './services/estudiantes.service';
import { CursosService } from './services/curso.service';
import { MatriculaService } from './services/matricula.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environments';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';

import { CursosComponent } from './cursos/cursos.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [AppComponent, EstudiantesComponent, CursosComponent, MatriculasComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule,
    TagModule,
    DialogModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [ EstudiantesService, CursosService, MatriculaService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
