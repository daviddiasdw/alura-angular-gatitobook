import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpCliente:HttpClient) { }

  authenticate(user: string, password: string): Observable<any> {
    return this.httpCliente.post('http://localhost:3000/user/login', {
      userName: user,
      password: password
    })
  }
}
