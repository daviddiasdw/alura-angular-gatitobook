import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = ''
  senha = ''
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.authenticate( this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['animals'])
    })
  }
}
