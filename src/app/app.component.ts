import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm', { static: false }) newForm: NgForm;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    console.log(this.newForm.value);
  }
}
