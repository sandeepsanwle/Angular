import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-subusers',
  templateUrl: './subusers.component.html',
  styleUrls: ['./subusers.component.css']
})
export class SubusersComponent {
  @Input() item: any;
  @Output() updateDataEvent = new EventEmitter<string>();

}
