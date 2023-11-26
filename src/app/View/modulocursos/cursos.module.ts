import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './componentecursos/cursos.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { CursosService } from 'src/app/services/curso.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ConfirmDialogModule,
    TableModule,
    MessagesModule
  ],
  providers:[ CursosService ],
})
export class CursosModule {}
