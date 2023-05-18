import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
  // ChangeDetection : ChangeDetectionStrategy
})
export class UsersComponent {
  isLoading = true;
  errorMessage = null;
  usersdata:any;
  
  constructor(private userData:UserdataService,
     private activateRoute:ActivatedRoute){
      this.userData.fetchUsers()
      .pipe(map((res) => {
        const allusers = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            allusers.push({ ...res[key], id: key })
          }
        }
        this.isLoading = false;
        return allusers;
      }))
      .subscribe((res) => {
        this.usersdata = res;
        console.log("fetch", this.usersdata);
      },err => {
        this.errorMessage = err.message;
      })
  }

  searchValue:any;
  getValue(newValue: any) {
    this.searchValue = newValue;
  }

  
  filterUsers() {
    if (this.searchValue) {
      return this.usersdata.filter((user:any) =>
        Object.values(user).some((val:any) =>
          val.toString().toLowerCase().includes(this.searchValue.toLowerCase())
        )
      );
    } else {
      return this.usersdata;
    }
  }

  //filters based on the name value
  // filterUsers() {                  
  //   if (this.searchValue) {
  //     return this.userdata.filter((user:any) =>
  //       user.name.toLowerCase().includes(this.searchValue.toLowerCase())
  //     );
  //   } else {
  //     return this.userdata;
  //   }
  // }
  //today = Date();
  header:any = "change component using child component";
  
   updateData(data:any){
     // console.log(data);
      this.header = data;
   }
}
