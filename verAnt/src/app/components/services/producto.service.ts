
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, routes } from '@angular/router';
// import { Producto } from '../interfaces/producto';


// export class ProductoComponent {

//   producto!: Producto;

//   constructor(
//     private route: ActivatedRoute,
//   ) {}


//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.productoService.getProductoPorId(id).subscribe(producto => {
//       this.producto = producto;
//     });
//   }

// }
// getProductoPorId(id: number): Observable<Producto> {
//     return this.getProductos().pipe(
//       map(productos => productos.find(p => p.id === id)!)
//     );
//   }
//   import { map } from 'rxjs/operators';
