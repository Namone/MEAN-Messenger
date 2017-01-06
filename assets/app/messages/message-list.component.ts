import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model"
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messageObj: Message[]) => { // this variable 'const messages = ...json().obj'
                    this.messages = messageObj;
                }
            ); // return messages and clone to array here
        if (this.messages != null) {
            console.log(this.messages);
        }
    }
}