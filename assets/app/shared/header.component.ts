import { Component } from "@angular/core";
 
@Component({
    selector: 'app-header',
    template: `
        <ul class="nav nav-pills">
            <li><a routerLink="/message" routerLinkActive="active">Messenger</a></li>
            <li><a routerLink="/auth" routerLinkActive="active">Authentication</a></li>
        </ul>
    `
})
export class HeaderComponent {

}