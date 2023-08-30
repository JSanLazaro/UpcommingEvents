import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private actualUser!: User;

  constructor(private httpClient: HttpClient) {}

  public addUser(user: any) {
    return this.httpClient.post(`${baseUrl}/users`, user);
  }

  public registerUser(user: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/register`, user);
  }
  public loginUser(user:any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/login`, user);
  }
  setUser(user: any) {
    this.actualUser = user;
  }
  getUser(): User {
    return this.actualUser;
  }
}
