import { Routes } from '@angular/router';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { LoginComponent } from './Pages/login/login.component';
import { PaginaComponent } from './Pages/pagina/pagina.component';
import { RegistroComponent } from './Pages/registro/registro.component';

export const routes: Routes = [
    {path: '', component: PrincipalComponent, title: 'Bienvenida'},
    {path: 'login', component: LoginComponent, title: 'login'},
    {path: 'pagina', component: PaginaComponent, title: 'pagina'},
    {path: 'registro', component: RegistroComponent, title: 'registro'},
];
