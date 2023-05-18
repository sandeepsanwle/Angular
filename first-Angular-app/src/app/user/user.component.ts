import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p id="user">
      user works!
    </p>
  `,
  styles: [
    `#user{
        color:red;
    }`
  ]
})
export class UserComponent {

}
