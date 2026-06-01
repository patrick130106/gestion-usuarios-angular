import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  usuarios = [
    {
      nombre: 'Juan Pérez',
      correo: 'juan@email.com',
    },
    {
      nombre: 'María López',
      correo: 'maria@email.com',
    },
  ];

  obtenerUsuarios() {
    return this.usuarios;
  }

  agregarUsuario(usuario: any) {
    this.usuarios.push(usuario);
  }
}