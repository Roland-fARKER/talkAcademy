import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor(private firestore: AngularFirestore) {}

  getEstudiantes(): Observable<any[]> {
    return this.firestore.collection('estudiantes').valueChanges({ idField: 'id' });
  }

  agregarEstudiante(estudiante: any): Promise<any> {
    return this.firestore.collection('estudiantes').add(estudiante);
  }

  actualizarEstudiante(id: string, estudiante: any): Promise<void> {
    return this.firestore.collection('estudiantes').doc(id).update(estudiante);
  }

  eliminarEstudiante(id: string): Promise<void> {
    return this.firestore.collection('estudiantes').doc(id).delete();
  }
}
