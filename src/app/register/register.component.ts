import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  
  profileForm = new FormGroup({
    firstname: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')])),
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  onSubmit() {
    
    console.warn(this.profileForm.value);
  }
  
  

  ngOnInit(): void {
  }
  errormessage = '';
  errorclass = '';

  get firstname() {
    return this.profileForm.get("firstname");
  }
  get lastname() {
    return this.profileForm.get("lastname");
  }
}
