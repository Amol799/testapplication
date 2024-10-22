import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "/get-users");
  }

  // Method to get a user by ID
  getUserById(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl +"/get-usersbyid", user);
  }

  // Method to create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/add-user-a', user);
  }

  // Method to update an existing user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update-user`, user);
  }

  // Method to delete a user by ID
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-user`);
  }
}
