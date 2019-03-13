import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading:boolean = false;
  submitted:boolean = false;
  returnUrl: string;
  error:boolean = false;
  errorMessage:string = 'Forkert brugernavn eller adgangskode';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
         
      this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['home']);
                console.log('data');
            },
            error => {
                this.error = true;
                this.loading = false;
                console.log('error');
            });
  }
  
  noLogin(){

    alert('Husk at denne hjemmeside KUN er ment til fremvisning! \nGod fornøjelse!');

    this.loading = true;

    this.authenticationService.login("Uden", "1234")
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['home']);
            console.log('data');
        },
        error => {
            this.error = true;
            this.loading = false;
            console.log('error');
        });
  }
}
