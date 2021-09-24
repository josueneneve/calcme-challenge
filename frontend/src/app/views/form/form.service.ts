import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './form.model';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  createUser(data: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }
}
