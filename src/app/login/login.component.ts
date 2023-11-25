import { Component } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private mensaje: MessageService,
    private router: Router
  ) {}

  async login() {
    this.errorMessage = '';

    try {
      await this.authService.signIn(this.email, this.password);
      this.errorMessage = ''; // Limpiar el mensaje de error si el inicio de sesión tiene éxito

      // Agregar mensaje de éxito
      this.mensaje.add({
        severity: 'success',
        summary: 'Inicio de sesión exitoso',
        detail: '¡Bienvenido!',
      });

      this.router.navigate(['Dashboard']);

      // Agregar mensaje de éxito
      this.mensaje.add({
        severity: 'success',
        summary: 'Inicio de sesión exitoso',
        detail: '¡Bienvenido!',
      });

    } catch (error: any) {
      console.error('Error al iniciar sesión', error);

      if (error.code === 'auth/invalid-login-credentials') {
        this.errorMessage =
          'Credenciales de inicio de sesión inválidas. Por favor, verifica tus datos.';
      } else {
        this.errorMessage =
          'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
      }

      // Agregar mensaje de error
      this.mensaje.add({
        severity: 'error',
        summary: 'Error en la autenticación',
        detail: this.errorMessage,
      });
    }
  }
}
