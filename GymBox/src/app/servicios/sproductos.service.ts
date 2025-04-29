import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../components/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class SproductosService {

  constructor(private httpClient: HttpClient) { }

  getProductos():Observable<Producto>{
    return this.httpClient.get<Producto>('assets/productos.json')
  }
}
