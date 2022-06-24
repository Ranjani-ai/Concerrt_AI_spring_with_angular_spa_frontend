import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/user/allUsers`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/user/addUser`, user);
  }

  public updateUser(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/api/user/update/${id}`, user);
  }

  public deleteUser(userId: any): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/user/delete/${userId}`);
  }

  public findUser(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/api/user/find/${id}`, user);
  }

  // deleteUser(id:any) {
  //   return this.http.delete(`${this.apiServerUrl}/api/user/delete/${id}`);
  // }
}
