import { Component } from '@angular/core';
import { MessageService } from "./messages/message.service";
import { RouterService } from "./app.router-service.service";
import { AuthenticationService } from "./auth/auth.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ MessageService, RouterService, AuthenticationService ] // add our service(s) globally
})
export class AppComponent {
    
}