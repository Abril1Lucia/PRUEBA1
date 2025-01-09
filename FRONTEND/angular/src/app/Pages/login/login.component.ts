import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms"
import { Credenciales } from '../../interfaces/credenciales';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  _loginService = inject(LoginService);
  _toastrService = inject(ToastrService);

  formularioLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })

  UserLogin() {
    const emailLogin = this.formularioLogin.value.email;
    const passwordLogin = this.formularioLogin.value.password;
    console.log(this.formularioLogin.value.email);
    console.log(this.formularioLogin.value.password);

    let CredencialesingresoUsers: Credenciales | null = null;

    if (typeof emailLogin === 'string' && typeof passwordLogin === 'string') {

      CredencialesingresoUsers = {
        emailLogin,
        passwordLogin
      }

    }


    if (CredencialesingresoUsers) {

      this._loginService.IniciodeSesionUser(CredencialesingresoUsers).subscribe({

        next: (res: any) => {

          console.log(res)
          if (res) {
            localStorage.setItem('token', res.tokenGenerado)
            
          }

        },

        error: (err) => {
          console.log(err.error.mensaje);
          this._toastrService.error(err.error.mensaje || 'Ocurrió un error al iniciar sesión');
          this.formularioLogin.reset();

        }


      })


    }



  }

}
