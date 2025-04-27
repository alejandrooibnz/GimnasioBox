import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PagoComponent } from './components/pago/pago.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '' },
];
