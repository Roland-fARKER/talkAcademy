import { Component } from '@angular/core';
import { MatriculaService } from '../../../services/matricula.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CursosService } from '../../../services/curso.service';
import { EstudiantesService } from '../../../services/estudiantes.service';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class MatriculasComponent {
  matriculas: any[] = [];
  matricula: any = {};
  selectedMatricula: any;
  cursos: any[] = [];
  estudiantes: any[] = [];
  displayDialog: boolean = false;

  constructor(
    private matriculaService: MatriculaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cursosservi: CursosService,
    private estudi: EstudiantesService
  ) {}

  ngOnInit() {
    this.cargarMatriculas();
    this.cargarCursos();
    this.cargarEstudiantes();
  }

  cargarMatriculas() {
    this.matriculaService.getMatriculas().subscribe((matriculas) => {
      this.matriculas = matriculas;
    });
  }

  cargarCursos() {
    this.cursosservi.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  cargarEstudiantes() {
    this.estudi.getEstudiantes().subscribe((estudiantes) => {
      this.estudiantes = estudiantes;
    });
  }

  mostrarDialogAgregar() {
    this.matricula = {};
    this.displayDialog = true;
  }

  guardarMatricula() {
    // Verificar si this.matricula y this.matricula.estudiante_id están definidos
    if (
      this.matricula &&
      this.matricula.curso &&
      this.matricula.curso.nombre &&
      this.matricula.estudiante_id 
    ) {
      console.log('Guardando matrícula con:', this.matricula);

      // Extraer las propiedades necesarias
      const cursoNombre = this.matricula.curso.nombre;
      const estudianteNombres = this.matricula.estudiante_id.nombres;
      let estudianteEstado;
      if(this.matricula.estudiante_id.estado){
        estudianteEstado = true;
      }else{
        estudianteEstado = false;
      }
      // Crear una nueva matrícula con los datos seleccionados
      const nuevaMatricula = {
        cursoId: cursoNombre,
        estudianteId: estudianteNombres,
        estudianteEstado: estudianteEstado,
        fecha: this.matricula.fecha,
        // Otros campos...
      };

      // Guardar la nueva matrícula
      this.matriculaService.agregarMatricula(nuevaMatricula).then(() => {
        this.cargarMatriculas();
        this.displayDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Matrícula guardada correctamente',
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'debe llenar todos los campos',
      });
      // Loguear los valores para depurar
      console.error(
        'Valores actuales - this.matricula:',
        this.matricula,
        'this.matricula.curso:',
        this.matricula.curso,
        'this.matricula.estudiante_id:',
        this.matricula.estudiante_id
      );

      // Manejar el caso en el que this.matricula o this.matricula.curso o this.matricula.estudiante_id no están definidos o no tienen un nombre.
      console.error(
        'La matrícula, el curso o el estudiante no están definidos o no tienen un nombre.'
      );

      // Puedes mostrar un mensaje de error o realizar otras acciones según tus necesidades.
    }
  }

  cancelarEdicion() {
    this.displayDialog = false;
  }

  mostrarDialogEditar(matricula: any) {
    this.matricula = { ...matricula };
    this.displayDialog = true;
  }

  editarMatricula() {
    this.matriculaService
      .actualizarMatricula(this.matricula.id, this.matricula)
      .then(() => {
        this.cargarMatriculas();
        this.displayDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Matrícula actualizada correctamente',
        });
      });
  }

  mostrarDialogEliminar(matricula: any) {
    this.selectedMatricula = matricula;
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta matrícula?',
      accept: () => {
        this.confirmarEliminarMatricula(this.selectedMatricula);
      },
      reject: () => {
        this.cancelarEliminarMatricula();
      },
    });
  }

  confirmarEliminarMatricula(matricula: any) {
    this.matriculaService.eliminarMatricula(matricula.id).then(() => {
      this.cargarMatriculas();
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Matrícula eliminada correctamente',
      });
    });
  }

  cancelarEliminarMatricula() {
    this.selectedMatricula = null;
  }
}
