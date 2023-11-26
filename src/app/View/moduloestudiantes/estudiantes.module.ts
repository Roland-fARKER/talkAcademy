import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    ToastModule,
    TableModule,
    TagModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers:[
    EstudiantesService,
  ]
})
export class EstudiantesModule { }
