import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UserModule } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: string[];
  private url = 'http://localhost:8080'

  constructor(private HttpClient: HttpClient) {
    this.userList = [];
  }

  get usersList() {
    return this.userList;
  }

  getAll(): Observable<UserModule[]> {
    return this.HttpClient.get<UserModule[]>(this.url);
  }

  postUser (newUser: UserModule): Observable<UserModule> {
    return this.HttpClient.post<UserModule>(this.url, newUser)
  }

  deleteUser (userId: string) {
    const deleteUserUrl = `${this.url}/${userId}`
    return this.HttpClient.delete(deleteUserUrl, {responseType: 'text'})
  }
}
