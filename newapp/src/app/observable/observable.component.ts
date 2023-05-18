import { Component,OnInit} from '@angular/core';
import { Observable ,of,from} from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  status:any;
  data:any;

  ngOnInit(): void {
    
    this.data = new Observable((observer) =>{
      setTimeout(() => {
        observer.next("in progress")
      }, 1000);


      setTimeout(() => {
        observer.next("processing...")
      }, 3000);
      
      // setTimeout(()=>{
      //   observer.error(new Error("something went wrong"))
      // },4000)

      setTimeout(() => {
        observer.next("completed")
      }, 6000);

      setTimeout(() => {
        observer.complete()
      }, 7000);

    });


    // this.data.subscribe((val:any)=> {
    //   console.log(val)
    //   this.status = val;
    // },(error)=>{
    //   alert(error.message);
    // },()=>{
    //   this.status = "congratulations";
    // })

    
  // this.myObservable.subscribe((val:any)=> {
  //   console.log(val)
  //   this.status = val;
  // },(error)=>{
  //   alert(error.message);
  // },()=>{
  //   this.status = "of observable";
  // })

  this.newData.subscribe((val:any)=> {
    console.log(val)
    this.status = val;
  },(error)=>{
    alert(error.message);
  },()=>{
    this.status = "from observable using map operator";
  })

  this.filteredData.subscribe((val)=>{
    console.log(val);
  },(error)=>{
    alert(error.message);
  },()=>{
    alert("filtered data");
  })

  }
  array1 = [1,2,3,4];
  array2 = ["name1","name2"];
  myobservable = from(this.array1);
  // myObservable = of(this.array1,this.array2,"1","2");
  newData = this.myobservable.pipe(map((val)=>{
          return val+10;
  }),filter((val)=>{
    return val<14;
}))

  filteredData = this.newData.pipe(filter((val)=>{
             return val<15;
  }))

}
