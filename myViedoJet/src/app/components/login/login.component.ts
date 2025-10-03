import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  //logUserEvent = output<User>()
  loginMismatch: boolean = false;

  loginForm: FormGroup = new FormGroup({
    usernameForm: new FormControl('', Validators.required),
    passwordForm: new FormControl('', Validators.required)
  })

  onSubmit(){

    this.loginMismatch = false

   if(this.loginForm.get('usernameForm')?.value == this.loginForm.get('passwordForm')?.value){
    const user: User = {
      login: this.loginForm.value.loginForm,
      password: this.loginForm.value.passwordForm
    }
    console.log(user)

    //this.logUserEvent.emit(user)
    this.loginForm.reset()
    this.router.navigate(["movie/menu"]);
   }
   else{
    this.loginMismatch = true;
   }

    

    
  }
}
