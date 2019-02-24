import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

import { Users } from './models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'KristofferSurrow.dk';

  currentUser:Users;

  constructor(
    private router:Router,
    private authentificationsService:AuthenticationService
    ){
      this.authentificationsService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
      this.authentificationsService.logout();
      this.router.navigate(['/login']);
    }
}
