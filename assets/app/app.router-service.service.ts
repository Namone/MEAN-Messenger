import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./users/user.model";

@Injectable()
export class RouterService { 
    constructor(private router: Router) {} // get our Router object to use

    // This will redirect based on the user ID, etc. to certain user page
    openUserPage(user: User) {
        this.router.navigateByUrl('/profile/${user.id}');
    }

}