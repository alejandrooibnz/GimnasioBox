import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {

  producto!: Producto;

  constructor(
    private route: ActivatedRoute,
    private servicio: ProductoService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductoPorId(id).subscribe(producto => {
      this.producto = producto;
    });
  }

}
getProductoPorId(id: number): Observable < Producto > {
  return this.getProductos().pipe(
    map(productos => productos.find(p => p.id === id)!)
  );
}
import { map } from 'rxjs/operators';
