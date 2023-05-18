import { Component } from '@angular/core';
import { NewComponent } from '../new/new.component';
import { Passdata } from '../services/passdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


 constructor(private passdata:Passdata){} 
  enteredText : string;

  onbtnClick(){
  //  console.log(this.enteredText);
  this.passdata.raisedDataEventEmitter(this.enteredText);
  }

}
