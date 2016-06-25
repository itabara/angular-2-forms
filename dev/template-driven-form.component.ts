/**
 * Created by Iulian on 25/06/16.
 */

import {Component} from "angular2/core";

@Component({
  selector: 'my-template-driven',
  template: `
    <h2>Sign-up Form</h2>
    <form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm">
      <div>
        <label for="mail">Mail</label>
        <input ngControl="email" type="text" id="mail" required #email="ngForm">
        <span class="validation-error" *ngIf="!email.valid">Not valid</span>
      </div>
      <div>
        <label for="password">Password</label>
        <input ngControl="password" type="password" id="password" required #password="ngForm">
        <span class="validation-error" *ngIf="!password.valid">Not valid</span>
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input ngControl="confirm-password" type="password" id="confirm-password" required #passwordConfirm="ngForm">
        <span class="validation-error" *ngIf="!passwordConfirm.valid">Not valid</span>
      </div>
      <button type="submit" [disabled]="!myForm.valid || password.value !== passwordConfirm.value">Submit</button>
    </form>
    <h2>You submitted</h2>
    <div>Mail: {{user.mail}}</div>
    <div>Password: {{user.password}}</div>
  `,
})

export class TemplateDrivenFormComponent{
  user = {mail:'', password: ''};
  onSubmit(myForm){
    this.user.mail = myForm.value['email'];
    this.user.password = myForm.controls['password'].value;
  }
}
