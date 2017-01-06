import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    
    private messages: Message[] = []; // an array of our messages
    constructor (private http: Http) {}

    addMessage(message: Message) {
       
       const body = JSON.stringify(message); // convert to JSON
       const headers = new Headers({ 'Content-Type': 'application/json' });
       return this.http.post('http://localhost:3000/message', body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Alex', result.obj._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);

        return this.http.delete('http://localhost:3000/message/' + message.messageId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj; // get obj field set up in node and set equal to messages
                let transformedMessages: Message[] = []; // array to hold transformed messages

                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, message.author, message._id));
                }
                this.messages = transformedMessages;
                return transformedMessages; // this is given to subscribers
            })
            
            .catch((error: Response) => Observable.throw(error.json()));
    }
}