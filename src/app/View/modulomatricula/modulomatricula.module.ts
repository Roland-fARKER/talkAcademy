import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatriculaService } from 'src/app/services/matricula.service';
import { MatriculasComponent } from './matriculas/matriculas.component';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'; 
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [ MatriculasComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule
  ],
  providers:[MatriculaService],
  exports:[MatriculasComponent ]
})
export class ModulomatriculaModule { }
