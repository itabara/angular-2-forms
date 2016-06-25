/**
 * Created by Iulian on 25/06/16.
 */

import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";

@Component({
  selector: 'my-data-driven',
  template: `
    <h2>Sign-up Form</h2>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="mail">Mail</label>
        <input [ngFormControl]="myForm.controls['email']" type="text" id="mail" #mail="ngForm">
        <span class="validation-error" *ngIf="!mail.valid">Not valid</span>
      </div>
      <div>
        <label for="password">Password</label>
        <input [ngFormControl]="myForm.controls['password']" type="password" id="password" #password="ngForm">
        <span class="validation-error" *ngIf="!password.valid">Not valid</span>
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input [ngFormControl]="myForm.controls['confirmPassword']" type="password" id="confirm-password" 
        #confirmPassword="ngForm">
        <span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
      </div>
      <button type="submit">Submit</button>
    </form>
    <h2>You submitted</h2>
    <div>Mail: {{user.email}}</div>
    <div>Password: {{user.password}}</div>
  `,
})

export class DataDrivenFormComponent implements OnInit{
  myForm: ControlGroup;
  user = {email:'', password: ''};

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit():any{
    this.myForm = this._formBuilder.group({
      'email':['', Validators.required],
      'password':['', Validators.compose([
          Validators.required, hasNumbers
          ])],
      'confirmPassword':['', Validators.required]
    });
  }

  onSubmit(myForm){
    //console.log(this.myForm);
    this.user = this.myForm.value;
  }
}

function hasNumbers(control: Control):{[s:string]:boolean}{
  // return only if we fail validation
  if (!control.value.match('\\d+')){
    return {noNumbers: true};
  }
}
