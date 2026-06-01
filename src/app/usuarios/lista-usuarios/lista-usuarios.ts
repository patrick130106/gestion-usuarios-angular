import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuariosComponent {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

}