import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Productos } from './components/productos/productos';

export const routes: Routes = [
  // Redirección raíz
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Vistas principales
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },

  // Ruta por defecto si no existe (404)
  { path: '**', redirectTo: 'inicio' },
];
