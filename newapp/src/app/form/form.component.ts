import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../services/userdata.service'
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient,
    public usersService: UserdataService) {

  }
  errorMessage = null;
  isLoading = true;
  userInfo: any;
  myForm!: FormGroup;
  edit = false;
  currentID;

  ngOnInit(): void {
   
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      college: new FormControl(''),

    });

    this.myForm.statusChanges.subscribe((v) => {
      console.log(v);
    })


    this.myForm.patchValue({
      firstName: 'sandeep',
      lastName: 'sanwle',
      email:'new@gmail.com',
      college:'IIPS'

    })

    this.fetchData();
     
    this.usersService.error.subscribe((message)=>{
      this.errorMessage = message;
     })

  }

  usersData() {
    this.fetchData();
  }

  onSubmit(data: any) {
    if (!this.edit) {
      
      //console.log(data);
      // you can store the form data to the state here
      this.usersService.createUsers(data).subscribe(res => {
        // this.fetchData();
        //    if(res.status == 201){
        //     alert("data saved successfully");
        //    }else{
        //     alert("not saved")
        //    }
        // },err => {
        //   alert("error")
        console.log(res);
      })
      // this.http.post('https://angular-3837a-default-rtdb.firebaseio.com/users.json',data).subscribe((res)=>{
      //   console.log(res);
      // })
    } else {
      this.usersService.updateUsers(this.currentID, data)
      this.edit = false;
      // this.fetchData();

    }
  }



  get firstName() {
    return this.myForm.get("firstName");
  }

  get lastName() {
    return this.myForm.get("lastName");
  }

  get email() {
    return this.myForm.get("email");
  }


   fetchData() {
    // this.http.get('https://angular-3837a-default-rtdb.firebaseio.com/users.json')
    this.usersService.fetchUsers()
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
        this.userInfo = res;
        console.log("fetch", this.userInfo);
      },err => {
        this.errorMessage = err.message;
      })
  }


  // onDelete(id: string){
  //   this.http.delete('https://angular-3837a-default-rtdb.firebaseio.com/users/'+id+'.json').subscribe();
  //   this.fetchData();
  // }

  onDelete(id: string) {
    this.usersService.deleteUsers(id);
    console.log(this.errorMessage);
  }




  onEdit(id: string) {
    this.currentID = id;
    let current = this.userInfo.find((user) => {
      return user.id === id

    }
    )
    this.edit = true;

    console.log(current);
    this.myForm.setValue({
      firstName: current.firstName,
      lastName: current.lastName,
      email: current.email,
      college: current.college
    })
  }

}

