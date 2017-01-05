import { Component, Input, Output, EventEmitter } from "@angular/core";;

@Component ({
    selector: 'app-messages',
    templateUrl: './message.component.html',
})
export class MessageComponent {

    @Input('messageInput') message;
    @Output() editClicked = new EventEmitter<string>();

    onDelete() {

    }

    onEdit() {

    }
}