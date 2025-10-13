import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  categoria_id?: number;
  tipo_producto?: string;
  creado_en?: string;
  imagen_base64?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://127.0.0.1:8000/productos';

  constructor(private http: HttpClient) { }

  // Listar productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/`);
  }

  // Obtener un producto por ID
  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/`, producto);
  }

  // Eliminar producto
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
