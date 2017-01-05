import { Component } from '@angular/core';
import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ MessageService ] // add our service globally
})
export class AppComponent {
    
}