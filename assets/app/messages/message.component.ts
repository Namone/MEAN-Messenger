import { Component, Input, Output, EventEmitter } from "@angular/core";;
import { MessageService } from "./message.service";

@Component ({
    selector: 'app-messages',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            font-style: italic;
        }
    `]
})
export class MessageComponent {

    @Input('messageInput') message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                
            );
    }
}