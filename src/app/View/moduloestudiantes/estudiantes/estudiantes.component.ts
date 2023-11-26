import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class EstudiantesComponent implements OnInit {
  estudiantes: any[] = [];
  estudiante: any = {}; // Propiedad para el estudiante que se está agregando/editando
  selectedEstudiante: any;
  displayDialog: boolean = false;

  constructor(
    private estudiantesService: EstudiantesService,
    public confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((estudiantes) => {
      this.estudiantes = estudiantes;
    });
  }

  mostrarDialogAgregar() {
    this.estudiante = {};
    this.displayDialog = true;
  }

  agregarEstudiante() {
    this.estudiantesService.agregarEstudiante(this.estudiante).then(() => {
      this.cargarEstudiantes();
      this.displayDialog = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Estudiante agregado correctamente',
      });
    });
  }

  mostrarDialogEditar(estudiante: any) {
    this.estudiante = { ...estudiante };
    this.displayDialog = true;
  }

  guardarEstudiante() {
    if (this.estudiante.id) {
      this.editarEstudiante();
    } else {
      this.agregarEstudiante();
    }
  }

  editarEstudiante() {
    this.estudiantesService
      .actualizarEstudiante(this.estudiante.id, this.estudiante)
      .then(() => {
        this.cargarEstudiantes();
        this.displayDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Estudiante actualizado correctamente',
        });
      });
  }

  mostrarDialogEliminar(estudiante: any) {
    this.selectedEstudiante = estudiante;
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar este estudiante?',
      accept: () => {
        this.confirmarEliminarEstudiante(this.selectedEstudiante);
      },
      reject: () => {
        this.cancelarEliminarEstudiante();
      },
    });
  }

  confirmarEliminarEstudiante(estudiante: any) {
    this.estudiantesService.eliminarEstudiante(estudiante.id).then(() => {
      this.cargarEstudiantes();
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Estudiante eliminado correctamente',
      });
    });
  }

  cancelarEliminarEstudiante() {
    this.selectedEstudiante = null;
  }

  cancelarEdicion() {
    this.displayDialog = false;
  }

  eliminarEstudiante(id: string) {
    this.estudiantesService
      .eliminarEstudiante(id)
      .then(() => {
        this.cargarEstudiantes();
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Estudiante eliminado correctamente',
        });
      })
      .catch((error) => {
        console.error('Error al eliminar estudiante', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al eliminar estudiante',
        });
      });
  }
}
