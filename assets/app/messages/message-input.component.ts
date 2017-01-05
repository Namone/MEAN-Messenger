import { Component, OnInit } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {

    constructor(private messageService: MessageService) { }

    onSubmit(form: NgForm) {
        var id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        const message = new Message(form.value.content, 'Alex', id);
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }

    // Run on initialize
    ngOnInit() {

    }
}