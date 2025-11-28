import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserInformation } from '../models/User';
import { BehaviorSubject, tap, Observable, take, map} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://6928d8989d311cddf3477989.mockapi.io/api/Users';

  private itemsSubject = new BehaviorSubject<UserInformation[]>([]);
  users$ = this.itemsSubject.asObservable();

 updateUsers(users: UserInformation[]) {
    this.itemsSubject.next(users);
  }

  getUsers(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(this.apiUrl, { responseType: 'json' }).pipe(
      tap(value => {
        this.updateUsers(value);
    }
    )
  )
  }
  updateUser(id: number, updatedData: UserInformation): Observable<any> {
   let url = `${this.apiUrl}/${id}`;
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    return this.http.put(url, updatedData, httpOptions);
  }





}
