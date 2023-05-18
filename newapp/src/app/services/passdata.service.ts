import { Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Passdata { 
       
    //    dataemitter = new EventEmitter<string>();
           dataemitter = new Subject<string>();

       raisedDataEventEmitter(data:string){
        this.dataemitter.next(data);
        // this,this.dataemitter.emit(data)
       }

 }