import { Component, OnInit } from '@angular/core';
import { Passdata } from '../services/passdata.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{

  constructor(private passdata:Passdata){}
    
  ngOnInit(): void {
    this.passdata.dataemitter.subscribe((val)=>{
      this.inputText = val;
    })
  }

   inputText:string;

}
