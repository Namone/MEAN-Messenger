import { Component, OnInit } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {

    message: Message;
    constructor(private messageService: MessageService) { }

    onSubmit(form: NgForm) {
        this.message = new Message('Alex', form.value.content);
        this.messageService.addMessage(this.message)
    }

    // Run on initialize
    ngOnInit() {

    }
}