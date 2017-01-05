import { Component } from "@angular/core";
 
@Component({
    selector: 'app-header',
    template: `
        <ul class="nav nav-pills">
            <li><a routerLink="/message-list" routerLinkActive="active">Messenger</a></li>
            <li><a routerLink="/auth" routerLinkActive="active">Authentication</a></li>
        </ul>
    `,
    styles: [`
        .active { background: #337ab7; border-color: #2e6da4; color: white; }
    `]
})
export class HeaderComponent {

}