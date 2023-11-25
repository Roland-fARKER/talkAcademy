import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  constructor(private firestore: AngularFirestore) {}

  getMatriculas(): Observable<any[]> {
    return this.firestore
      .collection('matriculas')
      .valueChanges({ idField: 'id' });
  }

  agregarMatricula(matricula: any): Promise<any> {
    return this.firestore.collection('matriculas').add(matricula);
  }

  eliminarMatricula(matriculaId: string): Promise<void> {
    return this.firestore.collection('matriculas').doc(matriculaId).delete();
  }

  actualizarMatricula(matriculaId: string, matricula: any): Promise<void> {
    return this.firestore
      .collection('matriculas')
      .doc(matriculaId)
      .update(matricula);
  }

  getCursos(): Observable<any[]> {
    return this.firestore.collection('cursos').valueChanges({ idField: 'id' });
  }

  getEstudiantes(): Observable<any[]> {
    return this.firestore.collection('estudiantes').valueChanges({ idField: 'id' });
  }
}
