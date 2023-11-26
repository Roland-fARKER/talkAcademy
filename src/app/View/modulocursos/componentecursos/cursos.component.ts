import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CursosService } from 'src/app/services/curso.service'; 

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  curso: any = {};
  selectedCurso: any;
  displayDialog: boolean = false;

  constructor(
    private cursosService: CursosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  mostrarDialogAgregar() {
    this.curso = {};
    this.displayDialog = true;
  }

  verificarid() {
    if (this.curso.id) {
      this.editarCurso();
    } else {
      this.guardarCurso();
    }
  }

  guardarCurso() {
    this.cursosService.agregarCurso(this.curso).then(() => {
      this.cargarCursos();
      this.displayDialog = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Curso guardado correctamente',
      });
    });
  }

  cancelarEdicion() {
    this.displayDialog = false;
  }

  mostrarDialogEditar(curso: any) {
    this.curso = { ...curso };
    this.displayDialog = true;
  }

  editarCurso() {
    console.log('Editando curso:', this.curso);
    this.cursosService.actualizarCurso(this.curso.id, this.curso).then(() => {
      this.cargarCursos();
      this.displayDialog = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Curso actualizado correctamente',
      });
    });
  }

  mostrarDialogEliminar(curso: any) {
    this.selectedCurso = curso;
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar este curso?',
      accept: () => {
        this.confirmarEliminarCurso(this.selectedCurso);
      },
      reject: () => {
        this.cancelarEliminarCurso();
      },
    });
  }

  confirmarEliminarCurso(curso: any) {
    this.cursosService.eliminarCurso(curso.id).then(() => {
      this.cargarCursos();
      this.displayDialog = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Curso eliminado correctamente',
      });
      this.cancelarEliminarCurso();
    });
  }

  cancelarEliminarCurso() {
    this.selectedCurso = null;
  }
}
