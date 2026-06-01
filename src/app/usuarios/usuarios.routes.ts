import { Routes } from '@angular/router';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario';

export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: ListaUsuariosComponent,
  },
  {
    path: 'nuevo',
    component: FormularioUsuarioComponent,
  },
];