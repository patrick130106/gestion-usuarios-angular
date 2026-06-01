import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class FormularioUsuarioComponent {

  usuario = {
    nombre: '',
    correo: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  guardarUsuario() {

    this.usuarioService.agregarUsuario({
      nombre: this.usuario.nombre,
      correo: this.usuario.correo,
    });

    alert('Usuario registrado correctamente');

    this.router.navigate(['/usuarios']);

  }

}