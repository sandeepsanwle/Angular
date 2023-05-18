import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  error = new Subject<any>();

  constructor(private http: HttpClient) { }
  // user=[
  //   {name:"aman",age:45,email:"aman@gmail.com"},
  //   {name:"chahal",age:29,email:"chahal@gmail.com"},
  //   {name:"vinay",age:33,email:"vinay@gmail.com"}
  // ];
//   users(){
//     return this.user;
// }
   url = "https://angular-3837a-default-rtdb.firebaseio.com/users.json"
   fetchUsers(){
    const params = new HttpParams().set('print','pretty');
    return this.http.get(this.url,{params:params});
   }
   
   createUsers(data:any){
    return this.http.post(this.url,data,{ observe: 'response' });
   }

   updateUsers(id: string,data){
    // let header = new HttpHeaders()
    // header = header.append('Authorization', 'Bearer your_token')
    // header = header.append('Content-Type', 'application/json');
    this.http.put('https://angular-3837a-default-rtdb.firebaseio.com/users/'+id+'.json',data).subscribe();
  }

  deleteUsers(id: string){
    const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

    this.http.delete('https://angular-3837a-default-rtdb.firebaseio.com/users/'+id+'.json',{headers:headers}).subscribe((res)=>{
      console.log(res);
    },(error)=>{
      this.error.next(error.message);
    });
  }

}
