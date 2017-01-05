import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { LogoutComponent } from "./auth/logout.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/message-list', pathMatch: 'full' },
    { path: 'message-list', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: [ 
        { path: '', redirectTo: 'signin', pathMatch: 'full' }, 
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'logout', component: LogoutComponent }  
    ] }
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule ],
    bootstrap: [AppComponent]
})
export class AppModule {

}