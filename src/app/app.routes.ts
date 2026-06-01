import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',

    // Lazy loading:
    // Angular carga este módulo solo cuando el usuario entra.
    // Mejora rendimiento y organización.
    loadChildren: () =>
      import('./usuarios/usuarios.routes').then(
        (m) => m.USUARIOS_ROUTES
      ),
  },
  {
    path: 'admin',

    // Separar módulos ayuda al mantenimiento
    // y escalabilidad del proyecto.
    loadChildren: () =>
      import('./admin/admin.routes').then(
        (m) => m.ADMIN_ROUTES
      ),
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full',
  },
];