import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { Credenciales } from '../interfaces/credenciales';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //inyecta dependencias we
private _httpClient = inject(HttpClient)
private _router = inject(Router)
public  _toastrService = inject(ToastrService);

//se saca del backend y el postman we
private URL_LOGIN_USER = "http://localhost:6000/iniciarSesion/Users"
//iniciar sesion peticion de POST 

IniciodeSesionUser(credencialesdeingreso:Credenciales){
  return this._httpClient.post(this.URL_LOGIN_USER,credencialesdeingreso)
}





obtenerToken(){
  return localStorage.getItem('token');
}



estaLogueado(){
  return this.obtenerToken()? true : false;
}

}
