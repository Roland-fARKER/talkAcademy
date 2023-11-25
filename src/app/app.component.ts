import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from './services/estudiantes.service';
import { CursosService } from './services/curso.service';
import { MatriculaService } from './services/matricula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'academiatalk';
  constructor(
    private estudiantesService: EstudiantesService,
    private cursosService: CursosService,
    private matriculasService: MatriculaService
  ) {}

  ngOnInit() {
    // Puedes realizar llamadas a los métodos de tus servicios aquí
    this.obtenerEstudiantes();
    this.obtenerCursos();
    this.obtenerMatriculas();
  }

  obtenerEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe(estudiantes => {
      // Manejar los datos de estudiantes
      console.log(estudiantes);
    });
  }

  obtenerCursos() {
    this.cursosService.getCursos().subscribe(cursos => {
      // Manejar los datos de cursos
      console.log(cursos);
    });
  }

  obtenerMatriculas() {
    this.matriculasService.getMatriculas().subscribe(matriculas => {
      // Manejar los datos de matrículas
      console.log(matriculas);
    });
  }
}
