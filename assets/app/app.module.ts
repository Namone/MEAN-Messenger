import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";

const appRoutes: Routes = [
    { path: '', component: MessageListComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    bootstrap: [AppComponent]
})
export class AppModule {

}