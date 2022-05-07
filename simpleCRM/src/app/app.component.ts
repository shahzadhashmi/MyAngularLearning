import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  // success_msg = true;
  // success_flag = true;
  // isLoggedIn = false;
  // isNewUser = false;


  contacts = [ 
    {
      'firstName': 'Shahzad',
      'lastName': 'hashmi',
      'contactId': 123
    },
    {
      'firstName': 'Ahmad',
      'lastName': 'abdullah',
      'contactId': 1234
    },
    {
      'firstName': 'usman',
      'lastName': 'qadir',
      'contactId': 12345
    },
    {
      'firstName': 'abbas',
      'lastName': 'haider',
      'contactId': 8547
    },
  ]
}
