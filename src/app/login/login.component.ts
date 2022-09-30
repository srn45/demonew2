import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  profileForms = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    // password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),

  });
  onSubmit() {

    // console.warn(this.profileForms.value);
  }
  ngOnInit(): void {
  }
  errormessage = '';
  errorclass = '';

  get email() {
    return this.profileForms.get("email");
  }
  get password() {
    return this.profileForms.get("password");
  }
  proceedlogin(name: any,role:any) {
    localStorage.setItem("username", name);
    // localStorage.setItem("password", pass)
    localStorage.setItem("role", role );
    this.router.navigate(["login"]);
  }

}



