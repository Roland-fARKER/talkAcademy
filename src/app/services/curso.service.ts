import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private firestore: AngularFirestore) {}

  getCursos(): Observable<any[]> {
    return this.firestore.collection('cursos').valueChanges({ idField: 'id' });
  }

  agregarCurso(curso: any): Promise<any> {
    return this.firestore.collection('cursos').add(curso);
  }

  eliminarCurso(cursoId: string): Promise<void> {
    return this.firestore.collection('cursos').doc(cursoId).delete();
  }
  
  actualizarCurso(cursoid: string, curso: any): Promise<void> {
    return this.firestore.collection('cursos').doc(cursoid).update(curso);
  }
  
}