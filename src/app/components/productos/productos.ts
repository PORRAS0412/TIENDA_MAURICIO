import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './productos.html',
  styleUrls: ['./productos.scss']
})
export class Productos {
  mostrarFormulario = false;
  cargando = false;

  //  Imágenes locales (asegúrate de tenerlas en /assets/)
  imagenes: string[] = [
    'assets/1.jpg',
    'assets/5.jpg',
    'assets/4.jpg',
    'assets/3.jpg',
    'assets/2.webp',
  ];

  // Lista de productos estáticos
  productos = [
    { id: 1, nombre: 'Camiseta Deportiva', precio: 45000, descripcion: 'Camiseta liviana y transpirable para entrenar.' },
    { id: 2, nombre: 'Tenis Urbanos', precio: 180000, descripcion: 'Diseño moderno y cómodo para uso diario.' },
    { id: 3, nombre: 'Chaqueta Impermeable', precio: 120000, descripcion: 'Protección contra la lluvia y el viento.' },
    { id: 4, nombre: 'Gorra Clásica', precio: 25000, descripcion: 'Perfecta para protegerte del sol con estilo.' },
    { id: 5, nombre: 'Bolso Deportivo', precio: 80000, descripcion: 'Espacioso y resistente, ideal para el gimnasio.' },
  ];

  // Producto temporal para el formulario
  nuevoProducto: any = {};



  agregarAlCarrito(p: any): void {
    console.log(`🛒 Producto añadido al carrito: ${p.nombre}`);
    alert(`Producto añadido al carrito: ${p.nombre}`);
  }
}
