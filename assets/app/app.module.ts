import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";

import { AuthenticationComponent } from "./auth/authentication.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/message', pathMatch: 'full' },
    { path: 'message', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    bootstrap: [AppComponent]
})
export class AppModule {

}