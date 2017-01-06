import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import { User } from "../users/user.model";
import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { 
        // Nothing
    }

    addUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers( { 'Content': 'application/json' } );
        return this.http.post('http://localhost:3000/user', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    validateUser() {

    }

    editUser() {

    }
}