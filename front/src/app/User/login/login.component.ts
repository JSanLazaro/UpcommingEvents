import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;
  loading = false;
  userName!: string;
  userService: UserService;
  
  constructor(private service: UserService, private formBuilder: FormBuilder) {
    this.userService = service;    
  }
  ngOnInt(){
    this.form = this.formBuilder.group({
      username:['', Validators.required],
      password:['',Validators.required]
    });
  }
  get f(){
    return this.form.controls;
  }

  signIn(): void {
    this.userService.setUser({ name: 'Nate Murray' });
    this.userName = this.userService.getUser().username;
    console.log('User name is: ' + this.userName);
  }
  onSubmit() {}
}
