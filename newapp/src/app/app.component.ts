import { Component ,OnInit} from '@angular/core';
import {UserdataService} from './services/userdata.service'
import { Passdata } from './services/passdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Passdata]
})
export class AppComponent implements OnInit {
  title = 'new-app';
  // users:any;
  // constructor(private user:UserdataService){
  //          this.users = user.users();
  //          console.log(this.users)
  // }

  ngOnInit(): void {
    console.log(this.title);
  }


 userdata:any;
  constructor(private userData:UserdataService,
    private passdata: Passdata){
    userData.fetchUsers().subscribe((data) => {
      this.userdata = data;
      
    })
  }
  

}
