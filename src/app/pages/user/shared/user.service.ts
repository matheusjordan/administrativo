import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import User from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiPath = 'api/users';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUsers)
    );
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUser)
    );
  }

  create(user: User): Observable<User> {
    return this.http.post(this.apiPath, user).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUser)
    );
  }

  update(user: User): Observable<User> {
    return this.http.put(this.apiPath, user).pipe(
      catchError(this.handleError),
      map(() => user)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  // PRIVATE METHODS

  private jsonDataToUsers(jsonData: any[]): User[] {
    const users: User[] = [];

    jsonData.forEach(element => users.push(element as User));

    return users;
  }

  private jsonDataToUser(jsonData: any): User {
    return jsonData as User;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERROR IN REQUEST => ', error);

    return throwError(error);
  }
}
