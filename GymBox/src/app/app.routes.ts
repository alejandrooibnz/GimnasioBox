import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PagoComponent } from './components/pago/pago.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '' },
];
