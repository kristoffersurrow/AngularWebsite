import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import {Users} from '../models/users'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<Users>;
    public currentUser: Observable<Users>;
    error = '';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    apiURL:string = 'http://localhost:12407/api/users';

    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }

    login(username:string, pw:string) {
        let user:Users = new Users(username,pw);

        return this.http.post<any>(this.apiURL,JSON.stringify(user),{headers: {'Content-Type': 'application/json'} })
            .pipe(map(user => {
            // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}