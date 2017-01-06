import { Component } from "@angular/core";
import { AuthenticationService } from "./auth.service";
import { NgForm } from "@angular/forms";
import { User } from "../users/user.model";

@Component ({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent {

    constructor(private auth: AuthenticationService) { } // get our service object

    onSubmit(form: NgForm) {
        // Get my form fields
        const username = form.value.username;
        const password = form.value.password;
        const email = form.value.email;

        const user = new User(username, password, email);

        // ... now do something with them
        this.auth.addUser(user)
            .subscribe();
    }

}