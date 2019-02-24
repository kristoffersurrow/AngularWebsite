import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component'
import { Users } from '../models/users';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //The TypeScript way ;)
  appTitle:string = 'KristofferSurrow.dk';

  constructor(
    private appComponent:AppComponent
  ) {  }

  ngOnInit() {
  }

  logout(){
    this.appComponent.logout();
  }

}
