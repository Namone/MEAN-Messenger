import { Message } from "./message.model";

export class MessageService {
    
    private messages: Message[] = []; // an array of our messages

    addMessage(message: Message) {
       this.messages.push(message);
       console.log(this.messages); // log out the message array
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    getMessages() {
        return this.messages; // get my messages
    }
}