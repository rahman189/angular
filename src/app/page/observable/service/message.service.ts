import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();
  private valueA = new Subject<number>();
  private valueB = new Subject<number>();

    sendMessage(message: object) {
        this.subject.next(message);
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    setValueA(value: number) {
      this.valueA.next(value)
    }

    getValueA(): Observable<number> {
      return this.valueA.asObservable();
    }
    
    setValueB(value: number) {
      this.valueB.next(value)
    }

    getValueB(): Observable<number> {
      return this.valueB.asObservable();
    }

}
