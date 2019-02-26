import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { AuthenticationService } from '../services/authentication.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //The TypeScript way ;)
  appTitle:string = 'KristofferSurrow.dk';

  constructor(
    private appComponent:AppComponent, private authService:AuthenticationService, private breakpointObserver: BreakpointObserver
  ) {  }

  ngOnInit() {
  }

  logout(){
    this.appComponent.logout();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

}
